import { useEffect, useState } from 'react';

export const useSpritesheet = (spriteSize: number, length: number) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    if (currentPosition >= spriteSize * length) {
      setCurrentPosition(0);
    }
  }, [currentPosition]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + spriteSize);
    }, 200);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return {
    currentPosition,
  };
};
