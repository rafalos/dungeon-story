import { useState, useEffect, useRef } from 'react';
import GPT from '../lib/OpenAiApi';
import { GPT_STRINGS } from '../utils/contants';
import { useSelector } from 'react-redux';

const composeMessage = (role, content) => ({
  role,
  content,
});

export const useGptStory = (seed, gptDriven) => {
  const { currentPosition } = useSelector((state) => state.exploration);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [story, setStory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messages = useRef([]);

  const getNextChapter = async () => {
    setIsLoading(true);

    // const gptResponse = await GPT.createChatCompletion({
    //   model: 'gpt-3.5-turbo',
    //   messages: messages.current,
    // });

    // const { data } = gptResponse;

    const data = {
      id: 'chatcmpl-8Gtr8reamHZtptGctrrmFAdFVxEds',
      object: 'chat.completion',
      created: 1699038650,
      model: 'gpt-3.5-turbo-0613',
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content:
              'As you step into the decrepit dungeon, whispers of forgotten souls echo through the darkness. Torn between curiosity and fear, you venture forth, armed with a fragile heart and a blade shadowed in your own doubts.',
          },
          finish_reason: 'stop',
        },
      ],
      usage: {
        prompt_tokens: 20,
        completion_tokens: 44,
        total_tokens: 64,
      },
    };

    const message = data.choices[0].message;
    const storyChapter = message.content;

    // const gptResponse = {
    //   role: 'system',
    //   content:
    //     'Give me very short dark fantasy solo roguelike entry dungeon text',
    // };

    messages.current.push(message);
    setCurrentChapter(storyChapter);
    setStory([...story, storyChapter]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (currentPosition < 0) {
      messages.current.push(
        composeMessage('system', GPT_STRINGS.EXPLORATIONS.ENTRY)
      );
    } else if (currentPosition === seed.length) {
      messages.current.push(
        composeMessage('user', GPT_STRINGS.EXPLORATIONS.ENDING)
      );
    } else {
      messages.current.push(
        composeMessage(
          'user',
          GPT_STRINGS.EXPLORATIONS[`${seed[currentPosition].toUpperCase()}`]
        )
      );
    }

    getNextChapter();
  }, [currentPosition]);

  return { isLoading, story, currentChapter, getNextChapter };
};
