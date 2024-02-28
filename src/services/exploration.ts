import { MoveStateSchema } from '@/schemas';
import axios from '../lib/axios';

export const getExplorations = async (): Promise<Exploration[]> => {
  const response = await axios.get('/exploration');

  return response.data;
};

export const getExploration = async (id: string): Promise<Exploration> => {
  const response = await axios.get(`/exploration/${id}`);

  return response.data;
};

export const generateNewExploration = async (): Promise<string> => {
  const response = await axios.post('/exploration');

  return response.data;
};

export const getCurrentChapter = async (explorationID: string) => {
  const response = await axios.get(`/exploration/${explorationID}/getChapter`);

  return response.data;
};

export const movePosition = async (explorationID: string) => {
  const response = await axios.post(`/exploration/${explorationID}/move`);

  return MoveStateSchema.parse(response.data);
};
