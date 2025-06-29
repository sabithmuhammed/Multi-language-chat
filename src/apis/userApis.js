import { api } from "./api";

export const login = async (userData) => {
    const response = await api.post("/login", userData);
    return response;
};

export const signup = async (userData) => {
    const response = await api.post("/signup", userData);
    return response;
};
