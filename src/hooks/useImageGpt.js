import { useState, useEffect } from 'react';
import GPT from '../initializers/gptInitializer';

export const useImageGpt = (requestString) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    GPT.createImage({
      prompt: 'Dark fantasy monster avatar'
    }).then((res) => {
      console.log(res)
    });
  }, [requestString]);

  return data;
};
