import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

type Variants = {
  brown: string;
  red: string;
  yellow: string;
  green: string;
};

type Props = {
  children: ReactNode;
  title: string;
  icon?: IconType;
};

const Container = ({ children, title, icon: Icon }: Props) => {
  return (
    <div className={`flex w-[700px] flex-col rounded text-xl text-black`}>
      <div
        className={`flex h-14 items-center gap-2 rounded bg-customRed bg-gradient-to-l from-customBlack from-5% to-transparent to-100% px-4 font-bold text-white`}
      >
        {Icon && (
          <div className="text-3xl">
            <Icon />
          </div>
        )}
        <div>{title}</div>
      </div>
      <div className={`flex-1 flex-wrap bg-customBlack bg-opacity-30 p-4`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
