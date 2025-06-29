import ChatBubble from "./ChatBubble";
import ChatInputSection from "./ChatInputSection";
import CurrentChatHeader from "./CurrentChatHeader";
import socket from "../socket";
import { useEffect, useState } from "react";
const currentUserId = "user-111";
const recipientId = "user-111";

const MessageArea = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on("receive-message", (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.off("receive-message");
        };
    }, []);

    // Send message
    const sendMessage = () => {
        if (!message.trim()) return;

        const msg = {
            to: recipientId,
            message,
        };

        socket.emit("send-message", msg);
        setMessages((prev) => [...prev, { from: currentUserId, message }]);
        setMessage("");
    };
    const handleSetMessage = (message) => {
        setMessage(message);
    };

    return (
        <div className="grow bg-zinc-900 flex flex-col rounded-2xl overflow-hidden">
            <CurrentChatHeader />
            <div className="w-full grow flex flex-col min-h-0 px-2">
                <div className="grow pt-1   overflow-auto w-full">
                    <div className="mx-auto max-w-[600px] w-full flex flex-col gap-1">
                        {messages?.map((msg, inx) => (
                            <ChatBubble key={inx} message={msg} />
                        ))}
                    </div>
                </div>
                <ChatInputSection
                    message={message}
                    handleSetMessage={handleSetMessage}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};

export default MessageArea;
