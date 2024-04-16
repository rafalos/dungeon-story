import React, { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type Props = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(['flex', 'justify-center', 'items-center'], {
  variants: {
    variant: {
      tab: [
        'bg-customRed h-8 p-4 transition text-customWhite text-sm md:text-lg md:p-4 font-bold',
      ],
      game: [
        'bg-customRed h-10 rounded px-8 transition text-customWhite text-sm md:text-lg font-bold',
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

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          buttonVariants({
            variant,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
