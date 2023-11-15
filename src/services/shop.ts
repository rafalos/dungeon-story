import axios from '@/lib/axios';

export const getCurrentShop = async () => {
  return axios.get('/shop');
};
