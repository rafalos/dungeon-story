import React, { ComponentProps } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
} & ComponentProps<'div'>;

function Card({ children, title }: Props) {
  return (
    <div className="mx-4 my-2 flex flex-col items-center rounded-lg bg-customWhite/5 p-2 text-customWhite">
      <h2 className='my-2'>{title}</h2>
      {children}
    </div>
  );
}

export default Card;
