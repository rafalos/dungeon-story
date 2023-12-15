import React, { ComponentProps, ComponentPropsWithoutRef, ReactNode } from 'react';


const LandingButton = ({
  ...props
}: ComponentProps<'button'>) => {
  return (
    <button
      {...props}
      className='h-8 w-24 md:h-14 md:w-48 text-xs md:text-xl rounded-md bg-gradient-to-r from-[#4b310f] to-[#1E1E1E]'
    />
  );
};

export default LandingButton;
