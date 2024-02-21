import axios from '../lib/axios';

export const wearItem = async (itemID: string) => {
  return axios.post(`/items/${itemID}/wear`);
};

export const unwearItem = async (itemID: string) => {
  return axios.post(`/items/${itemID}/unwear`);
};
