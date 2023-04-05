import { useState, useEffect } from 'react';
import GPT from '../initializers/gptInitializer';
import { GPT_STRINGS } from '../utils/contants';

export const useGptStory = (seed) => {
  const [story, setStory] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [storyPosition, setStoryPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessages, setCurrentMessages] = useState([
    {
      role: 'system',
      content: GPT_STRINGS.EXPLORATIONS.ENTRY,
    },
  ]);

  useEffect(() => {
    console.log(seed)
    if (!seed) return;
    if (story.length == seed.length + 2) {
      setIsLoading(false);
      setLoadingProgress(100);
      return;
    }
    if (currentMessages.length % 2 == 0) return;
    setLoadingProgress((story.length / (seed.length + 2)) * 100);
    GPT.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: currentMessages,
    }).then((res) => {
      setCurrentMessages((prevState) => {
        return [...prevState, res.data.choices[0].message];
      });
      let nextMessage;

      if (storyPosition == seed.length) {
        nextMessage = GPT_STRINGS.EXPLORATIONS.ENDING;
      } else if (storyPosition < seed.length) {
        nextMessage =
          GPT_STRINGS.EXPLORATIONS[seed[storyPosition].toUpperCase()];
      } else {
        nextMessage = null;
      }

      setCurrentMessages((prevState) => {
        return [
          ...prevState,
          {
            role: 'user',
            content: nextMessage,
          },
        ];
      });

      setStory((prevStory) => [
        ...prevStory,
        res.data.choices[0].message.content,
      ]);

      setStoryPosition((prevPosition) => (prevPosition += 1));
    });
  }, [seed, currentMessages]);

  return [isLoading, story, loadingProgress];
};
