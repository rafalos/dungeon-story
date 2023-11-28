import React from 'react';
import Entry from './Entry';

type Props = {
  explorations: Exploration[];
};

const List = ({ explorations }: Props) => {
  console.log(explorations);

  if (!explorations.length) {
    return <h2>No explorations found. Generate new one!</h2>;
  }

  return (
    <div className='flex justify-center items-center gap-2'>
      {explorations.map((exploration) => (
        <Entry
          key={exploration.id}
          id={exploration.id}
          name={exploration.name}
        />
      ))}
    </div>
  );
};

export default List;
