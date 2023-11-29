import React from 'react';

type Props = React.ComponentPropsWithoutRef<'button'>;

const Button = ({ title, children, ...rest }: Props) => {
  return (
    <button
      className='bg-red-900 rounded w-auto h-10 p-4 flex justify-center items-center hover:bg-red-800 transition text-customWhite'
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
