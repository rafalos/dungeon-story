import { useState, useEffect } from 'react';
import GPT from '../lib/OpenAiApi';
import { GPT_STRINGS } from '../utils/contants';
import { timeoutAfterSeconds } from '../utils/async';
import { useSelector } from 'react-redux';

export const useGptStory = (seed, gptDriven) => {
  const { currentPosition } = useSelector((state) => state.exploration);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [story, setStory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessages, setCurrentMessages] = useState([
    {
      role: 'system',
      content: GPT_STRINGS.EXPLORATIONS.ENTRY,
    },
  ]);

  const messageString =
    currentPosition < 0
      ? GPT_STRINGS.EXPLORATIONS.ENTRY
      : GPT_STRINGS.EXPLORATIONS[`${seed[currentPosition]}`];

  console.log(currentPosition);

  const getNextChapter = async () => {
    setIsLoading(true);
    //generate new chapter based on current messages

    // const gptResponse = await GPT.createChatCompletion({
    //   model: 'gpt-3.5-turbo',
    //   messages: currentMessages,
    // });

    const dummyData = {
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

    const message = dummyData.choices[0].message;
    const storyChapter = message.content + `${Math.floor(Math.random()*10000) + 1}`;

    // const gptResponse = {
    //   role: 'system',
    //   content:
    //     'Give me very short dark fantasy solo roguelike entry dungeon text',
    // };

    setCurrentChapter(storyChapter);
    setStory([...story, storyChapter]);
    setIsLoading(false);
  };

  // useEffect(() => {

  useEffect(() => {
    console.log('fired')
    getNextChapter();
  }, [currentPosition]);

  //     .then((res) => {
  //       setCurrentMessages((prevState) => {
  //         return [...prevState, res.data.choices[0].message];
  //       });
  //       let nextMessage;

  //       if (storyPosition == seed.length) {
  //         nextMessage = GPT_STRINGS.EXPLORATIONS.ENDING;
  //       } else if (storyPosition < seed.length) {
  //         nextMessage =
  //           GPT_STRINGS.EXPLORATIONS[seed[storyPosition].toUpperCase()];
  //       } else {
  //         nextMessage = null;
  //       }

  //       setCurrentMessages((prevState) => {
  //         return [
  //           ...prevState,
  //           {
  //             role: 'user',
  //             content: nextMessage,
  //           },
  //         ];
  //       });

  //       setStory((prevStory) => [
  //         ...prevStory,
  //         res.data.choices[0].message.content,
  //       ]);

  //       setStoryPosition((prevPosition) => (prevPosition += 1));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [seed, currentMessages, gptDriven]);

  return { isLoading, story, currentChapter, getNextChapter };
};
