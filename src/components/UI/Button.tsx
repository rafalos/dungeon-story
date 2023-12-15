import React from 'react';

type Props = React.ComponentPropsWithoutRef<'button'>;

const Button = ({ title, children, ...rest }: Props) => {
  return (
    <button
      className="flex h-10 w-auto items-center justify-center rounded bg-red-900 p-4 text-customWhite transition hover:bg-red-800"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
