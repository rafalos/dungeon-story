import { useNotification } from '@/store/notification-context';
import React, { useContext, useEffect, useState } from 'react';

type Props = {};

const timingSeconds = 4;

const Notification = () => {
  const { message, setNotification } = useNotification();
  const [count, setCount] = useState(timingSeconds * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 5);
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, timingSeconds * 1000);
  }, []);

  return (
    <div className="text-md absolute right-0 z-50 m-4 flex h-32 w-64 animate-appear flex-col items-center justify-around rounded-md border bg-customWhite text-customBlack">
      <div className="w-full p-4">{message}</div>
      <progress
        className="h-2 w-full"
        max={timingSeconds * 1000}
        value={count}
      ></progress>
    </div>
  );
};

export default Notification;
