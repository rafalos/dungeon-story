import { Types } from 'mongoose';
import { ExplorationSeed } from '../types';
import Story from '../models/Story';
import openAi from '../lib/openAiApi';
import {
  ChatCompletionMessage,
  ChatCompletionMessageParam,
} from 'openai/resources/chat/completions';
import { composeMessage } from './gpt';
import { EXPLORATION_STRINGS } from './constants';

const generateNextChapter = async (
  currentMessages: ChatCompletionMessageParam[]
): Promise<ChatCompletionMessage> => {
  const gptResponse = await openAi.chat.completions.create({
    messages: currentMessages,
    model: 'gpt-3.5-turbo',
  });

  return gptResponse.choices[0].message;
};

export const generateChapters = async (
  seed: ExplorationSeed,
  storyID: Types.ObjectId
) => {
  const story = await Story.findById(storyID);

  if (!story) return;

  if (story.messages.length <= 0) {
    story.messages.push(composeMessage('system', EXPLORATION_STRINGS.ENTRY));
    const chapter = await generateNextChapter(story.messages);

    story.messages.push(chapter);
    story.chapters.push(chapter.content as string);
  }

  for (const event of seed) {
    story.messages.push(
      composeMessage(
        'system',
        EXPLORATION_STRINGS[
          `${event.toUpperCase()}` as keyof typeof EXPLORATION_STRINGS
        ]
      )
    );

    const chapter = await generateNextChapter(story.messages);
    story.messages.push(chapter);
    story.chapters.push(chapter.content as string);
  }

  await story.save();
  return story.chapters;
};
