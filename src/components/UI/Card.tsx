import React, { ComponentProps } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
} & ComponentProps<'div'>;

function Card({ children, title }: Props) {
  return (
    <div className="mx-4 my-2 flex flex-col items-center gap-4 rounded bg-customWhite/10 p-2 text-customWhite">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;
