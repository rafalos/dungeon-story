import axios from '@/lib/axios';

export const getCurrentShop = async () => {
  return axios.get('/shop');
};

export const buyItem = (id: string) => {
  return axios.post(`/items/${id}/buy`);
};

export const sellItem = (id: string) => {
  return axios.post(`/items/${id}/sell`);
};
