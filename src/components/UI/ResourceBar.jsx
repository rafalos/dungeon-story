import React from 'react';
import classes from './ResourceBar.module.css';

function ResourceBar({ currentResource, maxResource, percentage, label }) {
  const factor = !isNaN(percentage)
    ? percentage
    : (currentResource / maxResource) * 100;

  return (
    <>
      {label && `${label}:`}
      <div className='border-2 border-solid border-black rounded w-full relative'>
        <div className={classes.factor}>{`${factor.toFixed(1)}%`}</div>
        <div
          className={`py-1 transition-all h-4 rounded`}
          style={{
            background: '#bd1717',
            width: `${factor}%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default ResourceBar;
