import { useState, useEffect } from 'react';
import GPT from '../initializers/gptInitializer';

export const useChatGpt = (requestSequence) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    GPT.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: requestSequence,
    }).then((res) => {
      setData(res.data.choices[0].message.content);
    });
  }, [requestString]);

  return data;
};
