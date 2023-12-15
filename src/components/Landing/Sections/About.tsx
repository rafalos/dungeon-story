import React from 'react';
import SectionHeader from '../SectionHeader';
import Separator from '../Separator';

const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col items-center text-landingWhite'
    >
      <SectionHeader title='About' />
      <div className='flex flex-col md:max-w-8xl md:flex-row-reverse md:p-12 w-full text-center justify-center'>
        <div className='flex flex-col md:max-w-3xl md:w-[85%] justify-center md:justify-around gap-4 md:gap-12'>
          <figure className='max-w-[95%] md:max-w-full'>
            <img src='/img1.jpeg' alt='' />
          </figure>
          <p className='text-sm md:text-lg text-left p-8 md:p-0'>
            Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus
            fringilla eget eget tristique massa. Suspendisse consectetur non
            urna fames tincidunt ut. . Ridiculus mattis morbi lacus fringilla
            eget eget tristique massa.
          </p>
        </div>
        <Separator />
        <div className='flex flex-col md:w-[85%] md:flex-col-reverse md:max-w-3xl gap-4 md:justify-around md:gap-12'>
          <figure className='max-w-[95%] md:max-w-full self-end md:self-auto'>
            <img src='/img2.jpeg' alt='' />
          </figure>
          <p className='text-sm md:text-lg text-left p-8 md:p-0'>
            Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus
            fringilla eget eget tristique massa. Suspendisse consectetur non
            urna fames tincidunt ut. Ridiculus mattis morbi lacus fringilla eget
            eget tristique massa.
          </p>
        </div>
      </div>
      <p className='p-8 text-sm md:text-lg text-center'>
        Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus
        fringilla eget eget tristique massa. Suspendisse consectetur non urna
        fames tincidunt ut.
      </p>
    </section>
  );
};

export default About;
