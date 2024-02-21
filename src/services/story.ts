import axios from '@/lib/axios';
import { StoriesSchema, StorySchema } from '@/schemas';

export const getStories = async () => {
  const response = await axios.get('/stories');

  const stories = StoriesSchema.parse(response.data);

  return stories;
};

export const getStory = async (storyID: string) => {
  const response = await axios.get(`/stories/${storyID}`);

  const story = StorySchema.parse(response.data);

  return story;
};
