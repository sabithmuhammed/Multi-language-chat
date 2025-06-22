import ChatSearch from "./ChatSearch";
import MessagesSection from "./MessagesSection";
import OnlineNowSection from "./OnlineNowSection";

const Sidebar = () => {
    return (
        <div className="w-full max-w-[350px]  h-full flex flex-col gap-2 overflow-hidden">
            <div className="">
                <h1 className="text-white text-3xl">ChatApp</h1>
            </div>
            <ChatSearch />
            <OnlineNowSection />
            <MessagesSection />
        </div>
    );
};

export default Sidebar;
