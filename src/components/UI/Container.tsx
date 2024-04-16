import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const Container = ({ children, title }: Props) => {
  return (
    <div
      className={`flex h-[calc(100%-3.5rem)] w-full flex-col text-xl md:h-full md:p-12 md:text-3xl`}
    >
      <h2 className="my-2 flex h-8 items-center justify-center font-bold text-customWhite">
        {title}
      </h2>
      <div className={`h-full pb-16 md:pb-0`}>{children}</div>
    </div>
  );
};

export default Container;
