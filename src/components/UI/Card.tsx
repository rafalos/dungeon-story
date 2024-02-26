import React, { ComponentProps } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
} & ComponentProps<'div'>;

function Card({ children, title }: Props) {
  return (
    <div className="mx-4 my-2 rounded-lg bg-customWhite/5 p-2 text-customWhite">
      <h2 className="text-sm uppercase md:text-xl">{title}</h2>
      <div className="flex flex-col p-2">{children}</div>
    </div>
  );
}

export default Card;
