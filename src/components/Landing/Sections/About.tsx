import React from 'react';
import SectionHeader from '../SectionHeader';
import Separator from '../Separator';

const About = () => {
  return (
    <section className='flex flex-col items-center text-landingWhite py-12'>
      <SectionHeader title='About' />
      <div className='flex flex-col md:flex-row-reverse w-full text-center md:justify-around'>
        <div className='md:flex md:flex-col items-start justify-center'>
          <figure className='max-w-[90%] md:w-[60%] md:max-w-full'>
            <img src='/img1.jpeg' alt='' />
          </figure>
          <p className='text-sm text-left md:text-left px-12 my-6'>
            Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus
            fringilla eget eget tristique massa. Suspendisse consectetur non
            urna fames tincidunt ut. . Ridiculus mattis morbi lacus fringilla
            eget eget tristique massa.
          </p>
        </div>
        <Separator />
        <div className='md:flex md:flex-col-reverse items-end'>
          <figure className='max-w-[90%] md:w-[60%] self-end md:self-auto'>
            <img src='/img2.jpeg' alt='' />
          </figure>
          <p className='text-sm text-left px-12 my-6'>
            Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus
            fringilla eget eget tristique massa. Suspendisse consectetur non
            urna fames tincidunt ut. Ridiculus mattis morbi lacus fringilla eget
            eget tristique massa.
          </p>
        </div>
      </div>
      <p className='p-8 text-sm text-center'>
        Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus
        fringilla eget eget tristique massa. Suspendisse consectetur non urna
        fames tincidunt ut.
      </p>
    </section>
  );
};

export default About;
