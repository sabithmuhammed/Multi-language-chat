import { api } from "./api";

export const login = async (userData) => {
    const response = await api.post("/auth/login", userData);
    return response;
};

export const signup = async (userData) => {
    const response = await api.post("/auth/signup", userData);
    return response;
};

export const getUsers = async () => {
    const response = await api.get("/users/get-users");
    return response;
};

export const createChat = async (chatData) => {
    const response = await api.post("/chats/create-chat", chatData);
    return response;
};

export const getMyChats = async () => {
    const response = await api.get("/chats/get-chats");
    return response;
};