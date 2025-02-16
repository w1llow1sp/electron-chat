import React, { useState } from 'react';
import styles from './ChatInput.module.css';

const ChatInput: React.FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <input
                type="text"
                className={styles.inputField}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button
                className={styles.button}
                onClick={() => {
                    if (message.trim()) {
                        onSend(message);
                        setMessage('');
                    }
                }}
            >
                Send
            </button>
        </div>
    );
};

export default ChatInput;
