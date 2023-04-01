import { useState, useEffect } from 'react';
import GPT from '../initializers/gptInitializer';

export const useChatGpt = (requestString) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    GPT.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: requestString,
        },
      ],
    }).then((res) => {
      setData(res.data.choices[0].message.content);
    });
  }, [requestString]);

  return data;
};
