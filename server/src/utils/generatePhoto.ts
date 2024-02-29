import openAi from '../lib/openAiApi';

export const getPhoto = async (query: string) => {
  const response = await openAi.images.generate({
    prompt: `fantasy ${query}`,
    size: '256x256',
  });
  return response;
};
