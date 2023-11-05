import React from 'react';

type Props = {
  title: string;
  mode: 'primary' | 'secondary';
  children: string;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = ({ title, mode, children, ...rest }: Props) => {
  const color = mode === 'primary' ? 'red' : 'yellow';

  return (
    <button
      className='bg-red-900 rounded w-auto h-10 p-4 flex justify-center items-center hover:bg-red-800 transition'
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
