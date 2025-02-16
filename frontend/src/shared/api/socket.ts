import {addMessage} from "../../entries/chat/chatSlice.ts";
import {store} from "../../app/store.ts";


const socket = new WebSocket("ws://localhost:4000");

socket.onopen = () => {
    console.log("Connected to WebSocket server");
};

socket.onmessage = async (event) => {
    try {
        const data = event.data;
        let text;

        if (typeof data === 'string') {
            text = data; // Если строка, используем как есть
        } else if (data instanceof Blob) {
            text = await data.text(); // Декодируем Blob в строку
        } else if (data instanceof ArrayBuffer) {
            text = new TextDecoder().decode(data); // Декодируем ArrayBuffer
        } else {
            console.error("Unsupported message format:", data);
            return;
        }

        store.dispatch(addMessage(text));
    } catch (error) {
        console.error("Failed to process message:", error);
    }
};

export default socket;

