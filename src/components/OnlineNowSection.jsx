import React from "react";

const OnlineNowSection = () => {
    return (
        <div className="">
            <h3 className="text-white">Online now</h3>
            <ul className="flex gap-3 p-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <li
                        key={index}
                        className="w-[55px] h-[55px] bg-red-300 rounded-full"
                    ></li>
                ))}
            </ul>
        </div>
    );
};

export default OnlineNowSection;
