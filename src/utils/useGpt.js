import { Configuration, OpenAIApi } from 'openai';
import { useState, useRef, useEffect } from 'react';

const configuration = new Configuration({
  organization: 'org-ysF18gtyXMTp4o6jEYPhVv3O',
  apiKey: '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',
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
