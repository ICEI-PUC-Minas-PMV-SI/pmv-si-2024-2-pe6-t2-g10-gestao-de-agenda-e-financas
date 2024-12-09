import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.4:3000' // Substitua pelo seu IP
});

export const createApiWithToken = (token) => {
    api.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    return api;
};


export default api;