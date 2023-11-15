import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const Loader = () => {
  return (
    <div className='absolute w-full h-full bg-black bg-opacity-30 z-50 top-0 left-0 flex justify-center items-center'>
      <ImSpinner2 className='animate-spin h-16 w-16 text-white' />
    </div>
  );
};

export default Loader;
