import React from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  id: string;
};

const Entry = ({ id, name }: Props) => {
  return (
    <div className="flex items-center justify-between bg-customWhite/10 text-customWhite px-4">
      <p className="">{name}</p>
      <Link to={`${id}`}>
        <Button variant="game">Enter</Button>
      </Link>
    </div>
  );
};

export default Entry;
