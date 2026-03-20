import { getCompletion } from '../lib/ollama';
import Story from '../models/Story';
import { GENERATE_NAME_STRING } from './constants';

export const generateLocation = async () => {
  const stories = await Story.find().sort({ createdAt: -1 }).limit(100);

  const usedLocations = stories.map((doc) => doc.location);

  const location = await getCompletion(
    `${GENERATE_NAME_STRING}, do NOT use any of these locations: ${usedLocations.join(
      ', '
    )}`
  );

  return location;
};

export const generateEntry = async () => {
  const comp = await getCompletion('You are a heroic adventurer entering the mysterious dungeon #LOCATION. Write a vivid, immersive 1-2 sentence journal entry in first person about your first steps inside. Use suspense and fantasy details. Max 400 characters.')

  return comp
}
