// src/store/socketStore.js
import { create } from "zustand";
import { io } from "socket.io-client";
import useAuthStore from "./authStore";

const useSocketStore = create((set) => ({
    socket: null,
    connected: false,
    messages: [],
    chats: null,
    selectedChat: null,
    setChats: (chats) => set({ chats }),
    setSelectedChat: (selectedChat) => set({ selectedChat }),
    setConnected: (connected) => set({ connected }),
    addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
    initSocket: () => {
        const user = useAuthStore.getState().user;
        if (!user) return console.error("User not authenticated");

        const socket = io("http://localhost:3000", {
            auth: {
                // token: user.token,
                userId: user.userId,
            },
        });

        socket.on("connect", () => {
            useSocketStore.getState().setConnected(true);
            console.log("Socket connected with id:", socket.id);
        });

        socket.on("disconnect", () => {
            useSocketStore.getState().setConnected(false);
        });

        socket.on("receiveMessage", (msg) => {
            useSocketStore.getState().addMessage(msg);
        });

        set({ socket });
    },
}));

export default useSocketStore;
