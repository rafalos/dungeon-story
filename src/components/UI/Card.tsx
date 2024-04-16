import React, { ComponentProps } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  title: string;
} & ComponentProps<'div'>;

function Card({ children, title }: Props) {
  return (
    <motion.div
      animate={{
        y: 5,
      }}
      className="mb-2 w-full rounded-lg bg-customWhite/5 p-2 text-customWhite shadow-sm md:m-4"
    >
      {title && (
        <h2 className="flex h-8 items-center border-l-4 border-customRed pl-2 font-bold uppercase md:text-2xl">
          {title}
        </h2>
      )}
      <div className="flex flex-col p-2">{children}</div>
    </motion.div>
  );
}

export default Card;
