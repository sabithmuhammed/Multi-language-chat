import { Paperclip, Send } from "lucide-react";

const ChatInputSection = ({ message, handleSetMessage, sendMessage }) => {
    return (
        <div className="shrink-0 w-full h-[60px]  flex gap-1 items-center mx-auto max-w-[600px]">
            <div className="grow bg-zinc-700 h-[50px] rounded-xl flex items-center px-1.5 gap-2">
                <span className="w-[40px] h-[40px] bg-zinc-600 flex rounded-xl justify-center items-center">
                    <Paperclip color="#ffffff" strokeWidth={1} />
                </span>
                <input
                    type="text"
                    className="grow h-full focus:outline-none text-white"
                    placeholder="Type something..."
                    value={message}
                    onChange={(e) => handleSetMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
                />
            </div>
            <button
                onClick={sendMessage}
                className="w-[50px] h-[50px] rounded-xl bg-zinc-700 flex items-center justify-center cursor-pointer"
            >
                <Send color="#ffffff" strokeWidth={1} />
            </button>
        </div>
    );
};

export default ChatInputSection;
