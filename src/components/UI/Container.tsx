import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

type Props = {
  children: ReactNode;
  title: string;
};

const Container = ({ children, title }: Props) => {
  return (
    <div
      className={`flex h-[calc(100%-3.5rem)] w-full flex-col overflow-hidden text-xl md:text-3xl`}
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
