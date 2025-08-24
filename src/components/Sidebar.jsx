import { useEffect, useState } from "react";
import ChatSearch from "./ChatSearch";
import MessagesSection from "./MessagesSection";
import OnlineNowSection from "./OnlineNowSection";
import { MessageSquareMore, UserPlus } from "lucide-react";
import { getMyChats, getUsers } from "../apis/userApis";
import useSocketStore from "../store/socketStore";

const Sidebar = () => {
    const chats = useSocketStore((store) => store.chats);
    const setChats = useSocketStore((store) => store.setChats);

    const [info, setInfo] = useState({
        search: "",
        searchUser: false,
        users: [],
    });

    useEffect(() => {
        if (info?.searchUser) {
            getAllUsers();
        }
    }, [info?.searchUser]);

    useEffect(() => {
        if (!chats) {
            getChats();
        }
    }, [chats]);

    const handleInfo = (data) => {
        setInfo((prevInfo) => ({ ...prevInfo, ...data }));
    };

    const handleSearch = (value) => {
        handleInfo({ search: value });
    };

    const getAllUsers = async (search = "") => {
        const response = await getUsers({ search });
        handleInfo({ users: response?.allUsers || [] });
    };

    const getChats = async () => {
        const response = await getMyChats();
        setChats(response?.conversations || []);
    };

    return (
        <div className="w-full max-w-[350px]  h-full flex flex-col gap-2 overflow-hidden relative">
            <div className="">
                <h1 className="text-white text-3xl">ChatApp</h1>
            </div>
            <ChatSearch search={info.search} handleSearch={handleSearch} />
            {info?.searchUser ? (
                <MessagesSection
                    blockTitle={"Users"}
                    usersList={info?.users}
                    searchUser={true}
                />
            ) : (
                <>
                    <OnlineNowSection />
                    <MessagesSection
                        blockTitle={"Messages"}
                        usersList={chats}
                    />
                </>
            )}
            <div
                onClick={() => handleInfo({ searchUser: !info?.searchUser })}
                className="w-[50px] h-[50px] bg-amber-300 rounded-2xl   absolute right-0 bottom-0.5 flex items-center justify-center cursor-pointer"
            >
                {info?.searchUser ? (
                    <MessageSquareMore className="text-zinc-800" />
                ) : (
                    <UserPlus className="text-zinc-800" />
                )}
            </div>
        </div>
    );
};

export default Sidebar;
