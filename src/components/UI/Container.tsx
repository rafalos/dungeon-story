import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const Container = ({ children, title }: Props) => {
  return (
    <div
      className={`flex h-[calc(100%-3.5rem)] md:h-full w-full flex-col text-xl md:p-12 md:text-3xl`}
    >
      <div
        className={`my-4 flex h-8 items-center justify-center font-bold text-customWhite`}
      >
        <div>- {title} -</div>
      </div>
      <div className={`h-full`}>{children}</div>
    </div>
  );
};

export default Container;
