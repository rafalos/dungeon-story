import React from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { GiCrossedSwords } from 'react-icons/gi';

type Props = {
  name: string;
  id: string;
};

const Entry = ({ id, name }: Props) => {
  return (
    <div className="flex items-center justify-between px-4 text-customWhite">
      <p className="">{name}</p>
      <Link to={`${id}`}>
        <Button variant="game">
          <GiCrossedSwords />
        </Button>
      </Link>
    </div>
  );
};

export default Entry;
