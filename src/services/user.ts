import axios from '../lib/axios';

export const getUser = async () => {
  const response = await axios.get('/users');

  return response.data;
};
