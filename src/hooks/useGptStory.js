import { useState, useEffect } from 'react';
import GPT from '../initializers/gptInitializer';
import { GPT_STRINGS } from '../utils/contants';
import { timeoutAfterSeconds } from '../utils/async';

export const useGptStory = (seed, gptDriven) => {
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
    if (!gptDriven) {
      setIsLoading(false);
      return;
    }

    if (!seed) return;
    if (story.length == seed.length + 2) {
      setIsLoading(false);
      setLoadingProgress(100);
      return;
    }
    if (currentMessages.length % 2 == 0) return;
    setLoadingProgress((story.length / (seed.length + 2)) * 100);
    Promise.race([
      GPT.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: currentMessages,
      }),
      timeoutAfterSeconds(10),
    ])
      .then((res) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [seed, currentMessages, gptDriven]);

  return [isLoading, story, loadingProgress];
};
