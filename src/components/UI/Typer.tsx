import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
  delay: number;
};

const Typer = ({ text, delay }: Props) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const inputText = text.split('');
    if (currentIndex > inputText.length - 1) return;

    const intervalId = setInterval(() => {
      setCurrentText((prev) => (prev += inputText[currentIndex]));
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentText, currentIndex]);

  return <div className="flex w-full justify-start">{currentText}</div>;
};

export default Typer;
