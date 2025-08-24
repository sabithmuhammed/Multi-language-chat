import useAuthStore from "../store/authStore";
import useSocketStore from "../store/socketStore";
import ChatBubble from "./ChatBubble";
import ChatInputSection from "./ChatInputSection";
import CurrentChatHeader from "./CurrentChatHeader";
// import socket from "../socket";
import { useState } from "react";
const recipientId = "jeswin@123";

const MessageArea = () => {
    const socket = useSocketStore((store) => store.socket);
    const messages = useSocketStore((store) => store.messages);
    const addMessage = useSocketStore((store) => store.addMessage);
    const selectedChat = useSocketStore((store) => store.selectedChat);

    const user = useAuthStore((state) => state.user);
    const [message, setMessage] = useState("");
    // useEffect(() => {
    //     socket.on("receive-message", (data) => {
    //         setMessages((prev) => [...prev, data]);
    //     });

    //     return () => {
    //         socket.off("receive-message");
    //     };
    // }, []);

    // Send message
    const sendMessage = () => {
        if (!message.trim()) return;

        const msg = {
            to: recipientId,
            from: user?.userId,
            text: message,
        };

        socket.emit("sendMessage", msg);
        addMessage(msg);
        setMessage("");
    };
    const handleSetMessage = (message) => {
        setMessage(message);
    };

    return (
        <div className="grow bg-zinc-900 flex flex-col rounded-2xl overflow-hidden">
            {selectedChat ? (
                <>
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
                </>
            ) : (
                <img
                    src="https://i.pinimg.com/736x/21/c0/42/21c042355fac117f418fe47fd99ea6c5.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
};

export default MessageArea;
