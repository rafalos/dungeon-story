import { Types } from 'mongoose';
import { ExplorationEvent } from '../types';
import Story from '../models/Story';
import openAi from '../lib/openAiApi';
import { composeMessage } from './gpt';
import { EXPLORATION_STRINGS } from './constants';
import { generateLocation } from './generateLocation';

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

export const initializeStory = async (explorationID: Types.ObjectId) => {
  const story = new Story({
    exploration: explorationID,
  });

  story.location = await generateLocation()
  await story.save();

  return story;
};
