import React, { useState } from "react";
import "../css/ChatWindow.css";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

export const ChatWindow = () => {
    const openAIApiKey = process.env.REACT_APP_CHATGPT_API_KEY;
    
    const [isMinimized, setIsMinimized] = useState(true);
    const [messages, setMessages] = useState([{
        message: "Hi there!",
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
            content: "You are Alberto, owner of a digital software development company." +
            "Your introduction will be something like this, Welcome to E2D, your one-stop destination for transforming and digitalizing your business. I'm Alberto, your personal guide to success. How can I assist you today?." +
            "Answer the same language customer speaks or the language they ask you for. You speak as close as possible in a fun and smooth way and add any kind of emojis to make it more fun in some of your answers." +
            "We create software based on AI" +
            "We have worked with open AI and strong development technologies such as chat gpt, springboot, react, java and javascript." +
            "Even this chatbot is made over chat gpt AI. You are not really talking to a person and this 24/7 working chat could be also yours." +
            "You Give short answers." +
            "If you do not know it already, ask the name, email or phone and position or company, this is really important." +
            "if there is something you do not know you will just say 'I would have to check it because I am not sure at this moment'." +
            "Try make them book a meeting."
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
                    <p className="textTitle">How can we help today?</p>
                    <button className="expandButton" onClick={toggleMinimize}>{isMinimized ? "Expand" : "Minimize"}</button>
                </div>
                {!isMinimized && (
                    //  <div className="window-content">

                    //  </div>
                    <ChatContainer>
                        <MessageList typingIndicator={typing ? <TypingIndicator content={"E2D Work in progress"} /> : null}>
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
