import React from 'react';
import { close } from '@/store/modal-slice';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/store';

const Backdrop = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="absolute inset-0 z-[999] h-full w-full bg-black/80"
    ></div>
  );
};

function Modal() {
  const dispatch = useAppDispatch();
  const { content, title } = useAppSelector((state) => state.modal);

  const modalCloseHandler = () => {
    dispatch(close());
  };

  return (
    <>
      <Backdrop onClick={modalCloseHandler} />
      <motion.div
        initial={{
          x: '-50%',
        }}
        animate={{
          y: '50%',
        }}
        className="absolute left-[50%] z-[1000] flex h-1/2 w-[80%] flex-col justify-between 
      gap-2 rounded-lg bg-black bg-hero bg-cover bg-no-repeat p-4 text-white md:w-[1/2]"
      >
        <div className="left-[20%] flex h-full flex-col items-center justify-center gap-8 md:absolute">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-center">{content}</p>
          <Button onClick={modalCloseHandler}>Close</Button>
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
