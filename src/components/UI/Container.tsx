import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

type Props = {
  children: ReactNode;
  title: string;
  icon?: IconType;
};

const Container = ({ children, title, icon: Icon }: Props) => {
  return (
    <div
      className={`flex h-[calc(100%-3.5rem)] w-full flex-col overflow-hidden text-xl`}
    >
      <div
        className={`flex h-8 items-center justify-center gap-4 bg-customRed p font-bold text-customWhite`}
      >
        {Icon && (
          <div className="text-3xl">
            <Icon />
          </div>
        )}
        <div>{title}</div>
      </div>
      <div
        className={`h-full overflow-auto bg-customBlack bg-slate-400/10 bg-opacity-30`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
