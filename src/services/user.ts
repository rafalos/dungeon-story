import axios from '../lib/axios';
import { UserSchema } from '@/schemas';

export const getUser = async () => {
  const response = await axios.get('/users');

  console.log(response)
  const user = UserSchema.parse(response.data);

  return user;
};
