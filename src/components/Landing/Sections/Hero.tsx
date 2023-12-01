import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='flex flex-col justify-center items-center h-[calc(100vh-128px)] text-landingWhite bg-hero bg-cover bg-right-top md:bg-center md:relative'>
      <div className='flex flex-col gap-12 items-center p-14 md:absolute md:left-1'>
        <h1 className='text-center text-3xl md:text-[3rem]'>Your journey starts here</h1>
        <button className='h-12 w-44 bg-red-600 rounded-sm bg-gradient-to-r from-[#4b310f] to-[#1E1E1E] text-sm'>
          Read more
        </button>
      </div>
    </section>
  );
};

export default Hero;
