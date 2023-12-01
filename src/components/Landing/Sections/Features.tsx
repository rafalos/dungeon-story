import React from 'react';
import SectionHeader from '../SectionHeader';
import Separator from '../Separator';
import Box from '../Box';

const Features = () => {
  return (
    <section className='flex flex-col items-center text-landingWhite py-12'>
      <SectionHeader title='Features' />
      <div className='flex flex-col gap-12 md:flex-row'>
        <Box
          color='yellow'
          title='title1'
          description='Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus fringilla eget eget tristique massa.'
        />
        <Box
          color='green'
          title='title2'
          description='Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus fringilla eget eget tristique massa.'
        />
        <Box
          color='pink'
          title='title3'
          description='Lorem ipsum dolor sit amet consectetur. Ridiculus mattis morbi lacus fringilla eget eget tristique massa.'
        />
      </div>
    </section>
  );
};

export default Features;
