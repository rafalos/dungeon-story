import axios from '../lib/axios';

export const getUser = async () => {
  console.log('getting user');
  const response = await axios.get('/users');

  return response.data;
};
