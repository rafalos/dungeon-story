import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
  delay: number;
  startDelay?: number;
};

const Typer = ({ text, delay, startDelay }: Props) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!startDelay) return setStarted(true);

    setTimeout(() => {
      setStarted(true);
    }, startDelay * 1000);
  }, []);

  useEffect(() => {
    if (!started) return;
    const inputText = text.split('');
    if (currentIndex > inputText.length - 1) return;

    const intervalId = setInterval(() => {
      setCurrentText((prev) => (prev += inputText[currentIndex]));
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentText, currentIndex, started]);

  return <div className="flex w-full justify-start">{currentText}</div>;
};

export default Typer;
