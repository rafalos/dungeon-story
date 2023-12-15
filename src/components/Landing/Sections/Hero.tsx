import React from 'react';
import LandingButton from '../LandingButton';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='flex flex-col justify-center items-center h-[calc(100vh-64px)] text-landingWhite bg-hero bg-cover bg-right-top md:bg-center md:relative'>
      <div className='flex flex-col gap-12 items-center p-14 md:absolute md:left-[10%]'>
        <div>
          <h1 className='text-3xl md:text-7xl mb-7 relative -left-1 font-bold'>
            Dungeon Story
          </h1>
          <h2 className='text-2xl md:text-[2rem] letter leading-10'>
            Conquer The <span className='font-bold'>Depths</span>
            <br></br>
            Enter The Unknown <br></br>
            Craft Your <span className='font-bold'>Tale</span>
          </h2>
        </div>
        <LandingButton>Read more</LandingButton>
      </div>
    </section>
  );
};

export default Hero;
