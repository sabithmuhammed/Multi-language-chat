const baseUrl = " http://localhost:3000/api/auth";
export const api = {
    async fetchApi(method = "GET", url, body = {}) {
        const fullUrl = baseUrl + url;

        try {
            let response;
            if (method !== "GET") {
                response = await fetch(fullUrl, {
                    method,
                    body: JSON.stringify(body),
                    headers: { "Content-Type": "application/json" },
                });
            } else {
                response = await fetch(fullUrl);
            }
            console.log(response);

            return response.json();
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
