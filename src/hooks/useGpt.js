import { Configuration, OpenAIApi } from 'openai';
import { useState, useRef, useEffect } from 'react';
import { GPT } from '../config';

const configuration = new Configuration({
  organization: GPT.ORGANIZATION_ID,
  apiKey: GPT.API_KEY,
});

export const useGpt = (requestString) => {
  const [data, setData] = useState(null);
  const ai = useRef(new OpenAIApi(configuration));

  useEffect(() => {
    ai.current
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: requestString,
          },
        ],
      })
      .then((res) => {
        setData(res.data.choices[0].message.content);
      });
  }, [requestString]);

  return data;
};
