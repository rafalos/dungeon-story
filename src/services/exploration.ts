import axios from '../lib/axios';

interface ExplorationResponse {
  seed: Seed;
  story: string[];
}

export const getNewExploration = async (): Promise<ExplorationResponse> => {
  const response = await axios.get('/exploration/new');

  return response.data;
};
