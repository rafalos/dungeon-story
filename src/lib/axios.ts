import axios from 'axios';

let token: string;
const baseURL = '/api';

export const setAuthToken = (newToken: string) => {
  token = newToken;
};

export const getAuthToken = () => token;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getAuthToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
