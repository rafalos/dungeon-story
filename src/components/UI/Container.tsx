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
  variant: keyof Variants;
};

const Container = ({ children, title, icon: Icon, variant }: Props) => {
  const variants = {
    brown: 'bg-lightBrown',
    red: 'bg-customRed',
    yellow: 'bg-customYellow',
    green: 'bg-customGreen',
  };

  return (
    <div className={`flex max-w-lg flex-col rounded text-xl text-black`}>
      <div
        className={`flex h-12 items-center justify-between rounded font-bold ${variants[variant]} bg-gradient-to-l from-customBlack from-5% to-transparent to-100% px-4 text-white`}
      >
        <div>{title}</div>
        {Icon && (
          <div className="text-3xl">
            <Icon />
          </div>
        )}
      </div>
      <div
        className={`flex-1 flex-wrap p-4 ${variants[variant]} bg-opacity-10`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
