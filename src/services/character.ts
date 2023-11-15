import axios from '../lib/axios';

export const getCharacter = async () => {
  const response = await axios.get('/characters');

  return response.data;
};
