import React from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  id: string;
};

const Entry = ({ id, name }: Props) => {
  return (
    <div className='text-customWhite bg-customWhite bg-opacity-5 p-6 flex justify-around items-center gap-2'>
      {name}
      <Link to={`${id}`}>
        <Button mode='primary'>Enter</Button>
      </Link>
    </div>
  );
};

export default Entry;
