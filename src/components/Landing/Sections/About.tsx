import React from 'react';
import SectionHeader from '../SectionHeader';
import Separator from '../Separator';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center text-landingWhite"
    >
      <SectionHeader title="About" />
      <div className="md:max-w-8xl flex w-full flex-col justify-center text-center md:flex-row-reverse md:p-12">
        <div className="flex flex-col justify-center gap-4 md:w-[85%] md:max-w-3xl md:justify-around md:gap-12">
          <figure className="max-w-[95%] md:max-w-full">
            <img src="/img1.jpeg" alt="" />
          </figure>
          <p className="p-8 text-left text-sm md:p-0 md:text-lg">
            In this gripping dark, traverse treacherous corridors, face
            unspeakable horrors, and unravel the mysteries that lie within.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 md:w-[85%] md:max-w-3xl md:flex-col-reverse md:justify-around md:gap-12">
          <figure className="max-w-[95%] self-end md:max-w-full md:self-auto">
            <img src="/img2.jpeg" alt="" />
          </figure>
          <p className="p-8 text-left text-sm md:p-0 md:text-lg">
            Descend into the abyssal depths of an unforgiving dungeon, where
            shadows dance in eternal darkness and every step could be your last
          </p>
        </div>
      </div>
      <p className="p-8 text-center text-2xl italic md:text-4xl">
        Are you prepared to face the darkness?
      </p>
    </section>
  );
};

export default About;
