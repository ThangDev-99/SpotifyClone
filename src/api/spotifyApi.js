import axios from "axios";
import queryString from 'query-string';
import { loginEndpoint } from "./axiosClient"

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: loginEndpoint.clientId })
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;