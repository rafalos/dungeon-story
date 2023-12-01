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
    <div className='flex flex-col justify-around items-center absolute right-0 m-4 z-50 bg-customWhite text-customBlack w-64 h-32 border rounded-md text-md animate-appear'>
      <div className='w-full p-4'>{message}</div>
      <progress
        className='h-2 w-full'
        max={timingSeconds * 1000}
        value={count}
      ></progress>
    </div>
  );
};

export default Notification;
