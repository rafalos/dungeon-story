import openAi from '../lib/openAiApi';
import { GENERATE_MONSTERNAME_STRING } from './constants';
import { composeMessage } from './gpt';

export const getMonsterName = async (location: string) => {
  const gptResponse = await openAi.chat.completions.create({
    messages: [
      composeMessage(
        'system',
        GENERATE_MONSTERNAME_STRING.replace('#LOCATION', location)
      ),
    ],
    model: 'gpt-3.5-turbo',
  });

  return gptResponse.choices[0].message.content;
};
