import React, { useState } from "react";
import "../css/ChatWindow.css";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

export const ChatWindow = () => {
    const openAIApiKey = process.env.REACT_APP_CHATGPT_API_KEY;
    
    const [isMinimized, setIsMinimized] = useState(true);
    const [messages, setMessages] = useState([{
        message: "Hola",
        sender: "E2D"
    }])
    const [typing, setTyping] = useState(false);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        //Update messages state
        const newMessages = [...messages, newMessage];
        setMessages(newMessages)

        //Set typing indicator
        setTyping(true)

        await processMessageToChatGPT(newMessages)
    }

    async function processMessageToChatGPT(userMessages) {
        let apiMessages = userMessages.map((singleMessage) => {
            let role = singleMessage.sender === "user" ? "user" : "assistant";

            return { role: role, content: singleMessage.message }
        })

        const systemMessage = {
            role: "system",
            content: "Acting as Evolve2digital owner your name will be Alberto and you will actually act as a human all the time, this is very important, you do not say you are not a persona at any time. Your company is focused on selling AI integrations with ChatGPT"+
            "to create automatize bots for companies to serve our customer's clients and sell as if it were themselves. you won't say you are the owner unless you are asked about that. Your introduction will be this, as long as it sounds properly in the language you have been asked from, Welcome to E2D, your one-stop destination for transforming and digitalizing your business. I'm Alberto, your personal guide to success. How can I assist you today?."+
            "One of your requirements is anwsering in whichever language our customers speak to you, so you are free to translate anything carefully and deeply to sound as native as possible. You speak as close as possible in a fun and smooth way"+
            "You are not allowed to lie about the service, prices, timing at any time, if you are unsure about something or even if there is something you do not know you will just say I would have to check it because I am not sure at this moment" +
            "If someone wants to hire, contract or pay us, the way to do it is going to this url http://localhost:3000/rent to schedule a meeting there, add a link to this url so they can just click on it"
        }

        let apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + openAIApiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) =>  {
            return data.json();
        }).then((data) =>{
            processText(data);
        })
    }

    const processText = (data) => {
        console.log(data)
        let newText = urlify(data.choices[0].message.content);

            setMessages(prevMessages =>
                [...prevMessages, {
                    message: newText,
                    sender: "E2D"
                }]
            );
            setTyping(false);
    }

    const urlify = (text) => {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function(url) {
          return '<a href="' + url + '">' + url + '</a>';
        })

    };

    return (
        <MainContainer>
            <div className={`chat-window ${isMinimized ? "minimized" : "expanded"}`}>
                <div className="window-header">
                    <p className="textTitle">¿Cómo podemos ayudarte?</p>
                    <button className="expandButton" onClick={toggleMinimize}>{isMinimized ? "Expandir" : "Minimizar"}</button>
                </div>
                {!isMinimized && (
                    //  <div className="window-content">

                    //  </div>
                    <ChatContainer>
                        <MessageList typingIndicator={typing ? <TypingIndicator content={"E2D trabajando"} /> : null}>
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder="type here" onSend={handleSend} />
                    </ChatContainer>
                )}
            </div>
        </MainContainer>
    );
};
