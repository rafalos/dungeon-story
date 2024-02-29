import axios from '@/lib/axios';
import { ShopSchema } from '@/schemas';

export const getCurrentShop = async () => {
  const response = await axios.get('/shop');

  return ShopSchema.parse(response.data);
};

export const buyItem = (id: string) => {
  return axios.post(`/items/${id}/buy`);
};

export const sellItem = (id: string) => {
  return axios.post(`/items/${id}/sell`);
};
