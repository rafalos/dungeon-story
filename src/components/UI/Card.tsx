import React, { ComponentProps } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
} & ComponentProps<'div'>;

function Card({ children, title }: Props) {
  return (
    <div className="border-customCaramel/20 shadow-customCaramel mb-2 w-full rounded-lg border-[1px] bg-customWhite/5 p-2 text-customWhite shadow-sm md:m-4">
      <h2 className="text-sm uppercase md:text-xl">{title}</h2>
      <div className="flex flex-col p-2">{children}</div>
    </div>
  );
}

export default Card;
