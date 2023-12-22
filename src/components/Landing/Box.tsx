import React from 'react';

type Props = {
  color: 'green' | 'pink' | 'yellow';
  title: string;
  description: string;
};

const Box = ({ color, title, description }: Props) => {
  const image = `/${color}-jewel.png`;

  return (
    <div className="max-w-[250px] rounded-md bg-gradient-to-b from-[#7A4500] to-[#2B2112] p-[1px] md:h-[274px] md:max-w-[400px]">
      <div className="flex h-full w-full flex-col items-center gap-2 rounded-md bg-landingBg p-2 text-center md:justify-around md:p-6">
        <img src={image} className="w-6 md:w-14" />
        <p className="text-md md:text-2xl">{title}</p>
        <p className="text-sm md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Box;
