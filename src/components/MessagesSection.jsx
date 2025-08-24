import React from "react";
import useSocketStore from "../store/socketStore";
import { createChat } from "../apis/userApis";
import useAuthStore from "../store/authStore";

const MessagesSection = ({ blockTitle, usersList, searchUser = false }) => {
    const setSelectedChat = useSocketStore((store) => store.setSelectedChat);
    const user = useAuthStore((store) => store.user);

    const handleChatClick = async ({ chat }) => {
        if (!searchUser && chat) {
            setSelectedChat(chat);
            return;
        }

        const response = await createChat({
            members: [chat?._id, user?._id],
        });
        setSelectedChat(response?.conversation);
    };

    const getChatName = (chat) => {
        if (chat?.isGroup) {
            return chat?.name;
        } else {
            const otherUser = chat?.members?.filter(
                (member) => member?._id !== user?._id
            )?.[0];
            console.log(otherUser);

            return otherUser?.username;
        }
    };

    return (
        <div className="flex flex-col gap-2 grow min-h-0">
            <h3 className="flex flex-col text-white">{blockTitle}</h3>
            <ul className="flex flex-col gap-1 overflow-auto">
                {usersList?.map((user, index) => (
                    <li
                        key={index}
                        className={`h-[55px]  px-2 flex gap-2 items-center shrink-0 rounded-xl hover:cursor-pointer ${
                            index === 1 && "bg-zinc-700"
                        }`}
                        onClick={() => handleChatClick({ chat: user })}
                    >
                        <span className="w-[45px] h-[45px] bg-green-100 flex rounded-full"></span>
                        <div className="flex flex-col justify-center gap-1">
                            <span className=" text-white font-semibold leading-none">
                                {searchUser ? user.username : getChatName(user)}
                            </span>
                            <span className="text-sm text-white/80 leading-none">
                                {!searchUser
                                    ? user?.lastMessage?.text
                                    : "Press to chat..."}
                            </span>
                        </div>
                        <div className=""></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessagesSection;
