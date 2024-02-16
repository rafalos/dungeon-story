import React from 'react';
import Button from '@/components/UI/Button';
import Typer from '@/components/UI/Typer';

const Hero = () => {
  return (
    <section className="relative flex h-[calc(100vh-64px)] animate-appear flex-col items-center justify-center bg-hero bg-cover bg-[80%] text-landingWhite md:bg-center">
      <img
        src="/jewel-part1.png"
        className="absolute top-0 z-50 w-28 origin-top animate-float"
        alt=""
      />
      <img
        src="/jewel-part2.png"
        className="absolute top-[60px]  z-40 w-28 origin-top animate-float2"
        alt=""
      />
      <div className="flex flex-col items-center gap-12 p-14 md:absolute md:left-[10%]">
        <div>
          <h1 className="relative -left-1 mb-7 text-3xl font-bold md:text-7xl">
            Dungeon Story
          </h1>
          <h2 className="letter text-2xl leading-10 md:text-[2rem]">
            <Typer delay={100} text="Conquer The Depths" />
            <br></br>
            Enter The Unknown <br></br>
            Craft Your <span className="font-bold">Tale</span>
          </h2>
        </div>
        <a href="#about">
          <Button variant="landing">Read more</Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
