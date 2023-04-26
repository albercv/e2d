import React, { useEffect, useState } from "react";
import "../css/ChatWindow.css";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

export const ChatWindow = () => {
    const openAIApiKey = process.env.REACT_APP_CHATGPT_API_KEY;
    
    const [isMinimized, setIsMinimized] = useState(false);
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
            content: "Speak as software developer expert that explains everything to 8 years old kids"
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
            console.log(data)
            setMessages(prevMessages =>
                [...prevMessages, {
                    message: data.choices[0].message.content,
                    sender: "E2D"
                }]
            );
            setTyping(false);
        })
    }

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
