import { useState, useEffect } from 'react';
import GPT from '../initializers/gptInitializer';

export const useImageGpt = (requestString) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    GPT.createImage({
      prompt: 'dark fantasy rpg game demon on bicycle avatar'
    }).then((res) => {
      console.log(res)
    });
  }, [requestString]);

  return data;
};
