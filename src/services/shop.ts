import axios from '@/lib/axios';

export const getCurrentShop = async () => {
  return axios.get('http://localhost:3001/api/shop');
};
