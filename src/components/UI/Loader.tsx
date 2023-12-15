import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const Loader = () => {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-30">
      <ImSpinner2 className="h-16 w-16 animate-spin text-white" />
    </div>
  );
};

export default Loader;
