import axios from '@/lib/axios';

export const getCurrentShop = async () => {
  return axios.get('/shop');
};

export const buyItem = (id: string) => {
  console.log('buying');
  return axios.post(`/items/${id}/buy`);
};
