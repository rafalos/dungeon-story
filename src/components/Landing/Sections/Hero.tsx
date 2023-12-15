import React from 'react';
import Button from '@/components/UI/Button';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex h-[calc(100vh-64px)] flex-col items-center justify-center bg-hero bg-cover bg-right-top text-landingWhite md:relative md:bg-center">
      <div className="flex flex-col items-center gap-12 p-14 md:absolute md:left-[10%]">
        <div>
          <h1 className="relative -left-1 mb-7 text-3xl font-bold md:text-7xl">
            Dungeon Story
          </h1>
          <h2 className="letter text-2xl leading-10 md:text-[2rem]">
            Conquer The <span className="font-bold">Depths</span>
            <br></br>
            Enter The Unknown <br></br>
            Craft Your <span className="font-bold">Tale</span>
          </h2>
        </div>
        <Button variant='landing'>Read more</Button>
      </div>
    </section>
  );
};

export default Hero;
