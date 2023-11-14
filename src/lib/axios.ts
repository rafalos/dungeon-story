import axios from 'axios';

let token;

export const setAuthToken = (token: string) => {
  token = token;
};

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    common: { Authorization: `Bearer ${token}` },
  },
});

export default instance;
