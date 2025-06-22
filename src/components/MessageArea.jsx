import ChatBubble from "./ChatBubble";
import ChatInputSection from "./ChatInputSection";
import CurrentChatHeader from "./CurrentChatHeader";

const MessageArea = () => {
    return (
        <div className="grow bg-zinc-900 flex flex-col rounded-2xl overflow-hidden">
            <CurrentChatHeader />
            <div className="w-full grow flex flex-col min-h-0 px-2">
                <div className="grow pt-1   overflow-auto w-full">
                    <div className="mx-auto max-w-[600px] w-full flex flex-col gap-1">
                        <ChatBubble />
                    </div>
                </div>
                <ChatInputSection />
            </div>
        </div>
    );
};

export default MessageArea;
