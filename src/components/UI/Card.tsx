import React from 'react';
import classes from './Card.module.css';

type Props = {
  style?: React.CSSProperties;
  children: React.ReactNode;
};

function Card({ children, style }: Props) {
  return (
    <div
      className="flex w-[100%] justify-around gap-6 p-16 text-white"
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;
