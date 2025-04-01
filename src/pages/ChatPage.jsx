import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator,} from "@chatscope/chat-ui-kit-react";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure to replace this with a secure method to store API keys
const API_KEY_3 = import.meta.env.VITE_GEMINI_API_KEY_3;

const ChatPage = () => {
    const genAI = new GoogleGenerativeAI(API_KEY_3);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const [messages, setMessages] = useState([
        {
            message: "Hello, I am your friend, Gemini! How can I help you today?",
            sender: "GeminiAI",
            direction: "incoming",
        },
    ]);

    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            sender: "user",
            direction: "outgoing",
        };

        const newMessages = [...messages, newMessage]; // All old messages + new messages

        // Update our messages state
        setMessages(newMessages);

        // Set typing indicator
        setIsTyping(true);

        // Process message to Gemini AI
        await processMessageToGeminiAI(newMessages);
    };

    async function processMessageToGeminiAI(chatMessages) {
        // Convert chat messages to the format expected by Gemini API
        let apiMessages = chatMessages.map((messageObject) => {
            return {
                role: messageObject.sender === "GeminiAI" ? "model" : "user",
                parts: [{ text: messageObject.message }],
            };
        });

        // Construct the request body
        const apiRequestBody = {
            contents: apiMessages,
        };

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY_3}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(apiRequestBody),
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `HTTP error! status: ${response.status}, message: ${errorText}`
                );
            }

            const data = await response.json();
            const aiMessage = {
                message: data.candidates[0].content.parts[0].text,
                sender: "GeminiAI",
                direction: "incoming",
            };

            setMessages([...chatMessages, aiMessage]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        } finally {
            setIsTyping(false);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="relative h-[80vh] w-[90vw] max-w-[700px] bg-white shadow-md overflow-hidden">
                <MainContainer>
                    <ChatContainer className="p-2 " >
                        <MessageList className="overflow-auto  "
                            scrollBehavior="smooth"
                            typingIndicator={
                                isTyping ? (
                                    <TypingIndicator content="GeminiAI is typing" />
                                ) : null
                            }
                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />;
                            })}
                        </MessageList>
                        <MessageInput
                            placeholder="Type your message here..."
                            onSend={handleSend}
                            attachButton={false}
                            autoFocus
                        />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
};

export default ChatPage;
