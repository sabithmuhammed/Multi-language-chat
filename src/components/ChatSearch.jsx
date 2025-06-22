import { Search } from "lucide-react";
const ChatSearch = () => {
    return (
        <div className="w-full px-2 flex rounded-xl grow bg-zinc-700 items-center">
            <Search color="#ffffff" strokeWidth={1} size={"20px"} />
            <input
                type="text"
                placeholder="Search chat..."
                className="h-[40px] indent-1 grow text-white focus:outline-none"
            />
        </div>
    );
};

export default ChatSearch;
