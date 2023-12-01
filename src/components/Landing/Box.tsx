import React from 'react';

type Props = {
  color: 'green' | 'pink' | 'yellow';
  title: string;
  description: string;
};

const Box = ({ color, title, description }: Props) => {
  const image = `/${color}-jewel.png`;

  return (
    <div className='w-[214px] md:w-[400px] md:h-[274px] p-[1px] rounded-md bg-gradient-to-b from-[#7A4500]  to-[#2B2112]'>
      <div className='flex flex-col items-center md:justify-around gap-2 text-center h-full w-full bg-landingBg rounded-md p-2 md:p-6'>
        <img src={image} className='w-6 md:w-14' />
        <p className='text-sm md:text-2xl'>{title}</p>
        <p className='text-xs md:text-lg'>{description}</p>
      </div>
    </div>
  );
};

export default Box;
