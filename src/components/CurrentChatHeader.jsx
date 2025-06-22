import React from "react";

const CurrentChatHeader = () => {
    return (
        <nav className="h-[55px] w-full flex bg-zinc-700 items-center px-2 gap-2">
            <span className="h-[40px] w-[40px] bg-amber-300 rounded-full"></span>
            <div className="flex flex-col items-center gap-1">
                <span className="leading-none text-white font-semibold">
                    Sabith
                </span>
                <span className="text-sm leading-none text-green-400 font-semibold">
                    Online
                </span>
            </div>
        </nav>
    );
};

export default CurrentChatHeader;
