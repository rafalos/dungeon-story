import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

type Props = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(['flex', 'justify-center', 'items-center'], {
  variants: {
    variant: {
      game: [
        'bg-red-900 hover:bg-red-800 h-10 rounded px-8 transition text-customWhite',
      ],
      landing: [
        'h-8',
        'w-24',
        'md:h-14',
        'md:w-48',
        'rounded-md',
        'bg-gradient-to-r',
        'from-[#4b310f]',
        'to-[#1E1E1E]',
        'text-xs',
        'md:text-xl',
      ],
    },
  },
  defaultVariants: {
    variant: 'game',
  },
});

const Button = ({ variant, className, ...props }: Props) => {
  return (
    <button
      className={buttonVariants({
        variant,
      })}
      {...props}
    />
  );
};

export default Button;
