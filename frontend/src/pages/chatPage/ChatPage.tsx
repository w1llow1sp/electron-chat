import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AppDispatch, RootState} from "../../app/store.ts";
import ChatInput from "../../shared/UI/chatInput/ChatInput.tsx";
import {addMessage} from "../../entries/chat/chatSlice.ts";
import styles from './ChatPage.module.css';
import socket from "../../shared/api/socket.ts";



const ChatPage: React.FC = () => {
    const messages = useSelector((state: RootState) => state.chat.messages);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        socket.onmessage = async (event) => {
            try {
                const data = event.data;
                let text;

                if (typeof data === 'string') {
                    text = data;
                } else if (data instanceof Blob) {
                    text = await data.text();
                } else if (data instanceof ArrayBuffer) {
                    text = new TextDecoder().decode(data);
                } else {
                    console.error("Unsupported message format:", data);
                    return;
                }
            } catch (error) {
                console.error("Failed to process message:", error);
            }
        };
    }, [dispatch]);

    return (
        <div className={styles.chatContainer}>
            <h1>Chat Room</h1>
            <div className={styles.messageList}>
                {messages.map((msg, index) => (
                    <p key={index} className={styles.message}>{msg}</p>
                ))}
            </div>
            <ChatInput onSend={(message) => {
                socket.send(message);
                dispatch(addMessage(message));
            }} />
        </div>
    );
};

export default ChatPage;
