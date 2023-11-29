import React from 'react';
import classes from './Card.module.css';

type Props = {
  style?: React.CSSProperties;
  children: React.ReactNode;
};

function Card({ children, style }: Props) {
  return (
    <div
      className='text-white flex justify-around w-[100%] p-16'
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;
