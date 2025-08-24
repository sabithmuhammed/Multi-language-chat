import { Search } from "lucide-react";
const ChatSearch = ({ search, handleSearch }) => {
    return (
        <div className="w-full px-2 flex rounded-xl bg-zinc-700 items-center">
            <Search color="#ffffff" strokeWidth={1} size={"20px"} />
            <input
                type="text"
                placeholder="Search user..."
                className="h-[40px] indent-1 grow text-white focus:outline-none"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};

export default ChatSearch;
