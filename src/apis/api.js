import useAuthStore from "../store/authStore";

const baseUrl = "http://localhost:3000/api"; // removed extra space

export const api = {
    async fetchApi(method = "GET", url, body = {}) {
        const fullUrl = baseUrl + url;
        const token = useAuthStore.getState().user?.token;

        try {
            const headers = {
                "Content-Type": "application/json",
            };
            console.log("token", token);

            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }

            const options = {
                method,
                headers,
            };

            if (method !== "GET") {
                options.body = JSON.stringify(body);
            }

            const response = await fetch(fullUrl, options);

            if (!response.ok) {
                return { error: `HTTP error! status: ${response.status}` };
            }

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    },

    async get(url) {
        return await this.fetchApi("GET", url);
    },

    async post(url, body) {
        return await this.fetchApi("POST", url, body);
    },
};
