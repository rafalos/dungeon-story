import React from 'react';
import SectionHeader from '../SectionHeader';
import Separator from '../Separator';
import Box from '../Box';

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center py-12 text-landingWhite"
    >
      <SectionHeader title="Features" />
      <div className="my-8 flex flex-col gap-12 md:flex-row">
        <Box
          color="yellow"
          title="Earn"
          description="Thousands of gold coins and countless items await to be found"
        />
        <Box
          color="green"
          title="Explore"
          description="Through the shadows of the forest and deepest dungeons awaiting for you"
        />
        <Box
          color="pink"
          title="Fight"
          description="Nightmarish foes await. Brace yourself for a relentless test of skill and courage "
        />
      </div>
    </section>
  );
};

export default Features;
