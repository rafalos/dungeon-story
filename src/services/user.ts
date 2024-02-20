import axios from '../lib/axios';
import { InventorySchema, UserSchema } from '@/schemas';

export const getUser = async () => {
  const response = await axios.get('/users');

  const user = UserSchema.parse(response.data);

  return user;
};

export const getInventory = async () => {
  const response = await axios.get('/inventory');

  const inventory = InventorySchema.parse(response.data);

  return inventory;
};
