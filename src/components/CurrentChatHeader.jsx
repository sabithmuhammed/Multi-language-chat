import React from "react";
import useSocketStore from "../store/socketStore";
import useAuthStore from "../store/authStore";

const CurrentChatHeader = () => {
    const selectedChat = useSocketStore((store) => store.selectedChat);
    const user = useAuthStore((store) => store.user);

    const getNameAndDetails = () => {
        if (selectedChat) {
            if (selectedChat?.isGroup) {
                return {
                    name: selectedChat?.name,
                };
            } else {
                const otherUser = selectedChat?.members?.filter(
                    (member) => member?._id !== user?._id
                )?.[0];
                console.log(otherUser);

                return {
                    name: otherUser?.username,
                    isOnline: otherUser?.isOnline,
                };
            }
        }
        return {
            name: "",
        };
    };

    const details = getNameAndDetails(selectedChat);

    return (
        <nav className="h-[55px] w-full flex bg-zinc-700 items-center px-2 gap-2">
            <span className="h-[40px] w-[40px] bg-amber-300 rounded-full"></span>
            <div className="flex flex-col items-start gap-1">
                <span className="leading-none text-white font-semibold">
                    {details?.name}
                </span>
                <span className="text-sm leading-none text-green-400 font-semibold">
                    {details?.isOnline && "Online"}
                </span>
            </div>
        </nav>
    );
};

export default CurrentChatHeader;
