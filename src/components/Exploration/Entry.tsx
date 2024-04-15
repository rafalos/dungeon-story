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
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`relative flex size-48 flex-col justify-between gap-4 bg-contain bg-no-repeat text-center text-customWhite md:size-80`}
    >
      <p className="z-20 bg-black p-2 text-sm md:text-lg">{name}</p>
      <div className="flex justify-center bg-black p-2">
        <Link to={`${id}`} className="z-20">
          <Button variant="game">Explore</Button>
        </Link>
      </div>
    </div>
  );
};

export default Entry;
