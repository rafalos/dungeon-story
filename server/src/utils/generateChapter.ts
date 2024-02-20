import { Types } from 'mongoose';
import { ExplorationEvent, ExplorationSeed } from '../types';
import Story from '../models/Story';
import openAi from '../lib/openAiApi';
import { composeMessage } from './gpt';
import { EXPLORATION_STRINGS, GENERATE_NAME_STRING } from './constants';

export const generateNextChapter = async (
  storyID: Types.ObjectId,
  event: ExplorationEvent
): Promise<string> => {
  const story = await Story.findById(storyID);

  if (!story) throw new Error('No story found');

  story.messages.push(
    composeMessage(
      'system',
      EXPLORATION_STRINGS[
        `${event.toUpperCase()}` as keyof typeof EXPLORATION_STRINGS
      ].replace('#LOCATION', story.location)
    )
  );

  const gptResponse = await openAi.chat.completions.create({
    messages: story.messages,
    model: 'gpt-3.5-turbo',
  });

  const message = gptResponse.choices[0].message;

  if (!message.content) throw new Error('There was an error');

  story.messages.push(message);

  story.chapters.push(message.content);

  await story.save();

  return message.content;
};

const getLocationName = async () => {
  const gptResponse = await openAi.chat.completions.create({
    messages: [composeMessage('system', GENERATE_NAME_STRING)],
    model: 'gpt-3.5-turbo',
  });

  return gptResponse.choices[0].message.content;
};

export const initializeStory = async (explorationID: Types.ObjectId) => {
  const story = new Story({
    exploration: explorationID,
  });

  story.location = (await getLocationName()) ?? 'Mysterious forest';

  await story.save();

  return story;
};
