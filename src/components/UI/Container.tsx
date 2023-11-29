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
    <div className={`rounded w-[590px] flex flex-col text-2xl text-black`}>
      <div
        className={`flex items-center justify-between rounded font-bold h-24 ${variants[variant]} bg-gradient-to-l from-customBlack text-white from-15% to-transparent to-100% px-12`}
      >
        <div>{title}</div>
        {Icon && (
          <div className='text-3xl'>
            <Icon />
          </div>
        )}
      </div>
      <div className={`flex-1 flex-wrap p-2 ${variants[variant]} bg-opacity-5`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
