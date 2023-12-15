import React from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  id: string;
};

const Entry = ({ id, name }: Props) => {
  return (
    <div className="flex items-center justify-around gap-2 bg-customWhite bg-opacity-5 p-6 text-customWhite">
      {name}
      <Link to={`${id}`}>
        <Button mode="primary">Enter</Button>
      </Link>
    </div>
  );
};

export default Entry;
