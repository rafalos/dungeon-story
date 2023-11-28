import React from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  id: string;
};

const Entry = ({ id, name }: Props) => {
  return (
    <div className='border-4 border-gray-700 p-6 flex justify-center items-center flex-col gap-2'>
      {name}
      <Link to={`${id}`}>
        <Button mode='primary'>Enter</Button>
      </Link>
    </div>
  );
};

export default Entry;
