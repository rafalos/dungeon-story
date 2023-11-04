import axios from '../lib/axios';

export const getExplorationSeed = async (): Promise<Seed> => {
  const response = await axios.get('/seed');

  return response.data;
};
