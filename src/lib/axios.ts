import axios from 'axios';

let token: string;

export const setAuthToken = (newToken: string) => {
  token = newToken;
};

export const getAuthToken = () => token;

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${getAuthToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
