import React from "react";

const MessagesSection = () => {
    return (
        <div className="flex flex-col gap-2 grow min-h-0">
            <h3 className="flex flex-col text-white">Messages</h3>
            <ul className="flex flex-col gap-1 overflow-auto">
                {Array.from({ length: 30 }).map((_, index) => (
                    <li
                        key={index}
                        className={`h-[55px]  px-2 flex gap-2 items-center shrink-0 rounded-xl ${
                            index === 1 && "bg-zinc-700"
                        }`}
                    >
                        <span className="w-[45px] h-[45px] bg-green-100 flex rounded-full"></span>
                        <div className="flex flex-col justify-center gap-1">
                            <span className=" text-white font-semibold leading-none">
                                Sabith
                            </span>
                            <span className="text-sm text-white/80 leading-none">
                                Hola mucho gusto
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
