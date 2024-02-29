import React from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { GiCrossedSwords } from 'react-icons/gi';

type Props = {
  name: string;
  id: string;
  image: string;
};

const Entry = ({ id, name, image }: Props) => {
  console.log(id, image, name);

  return (
    <div className="relative flex h-52 size-52 flex-col items-center justify-between gap-4 text-center text-customWhite">
      <p className="z-20 bg-black/70 p-2 text-sm md:text-lg">{name}</p>
      <img src={image} alt="" className="absolute size-52" />
      <Link to={`${id}`} className="z-20">
        <Button variant="game">
          <GiCrossedSwords />
        </Button>
      </Link>
    </div>
  );
};

export default Entry;
