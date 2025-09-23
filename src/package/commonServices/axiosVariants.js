import axios from "axios";
import useLinkUpStore from "../../shared/store/store";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const state = useLinkUpStore.getState();
    const access_token = state.access_token;

    if (!access_token) {
        return config;
    }

    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
});

/**
 * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} method
 * @param {any} body
 */
export const axiosReturnsData = async (method, url, body) => {
    switch (method) {
        case "GET": {
            const response = await axiosInstance.get(url);
            return response.data;
        }
        case "POST": {
            const response = await axiosInstance.post(url, body);
            return response.data;
        }
        case "PUT": {
            const response = await axiosInstance.put(url, body);
            return response.data;
        }
        case "PATCH": {
            const response = await axiosInstance.patch(url, body);
            return response.data;
        }
        case "DELETE": {
            const response = await axiosInstance.delete(url);
            return response.data;
        }
        default:
            throw new Error("---- ERROR OCCURRED: 잘못된 메소드입니다");
    }
};
