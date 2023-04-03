import React from 'react';
import classes from './ResourceBar.module.css';

function ResourceBar({ currentResource, maxResource, percentage, label }) {
  const factor = !isNaN(percentage)
    ? percentage
    : (currentResource / maxResource) * 100;
  return (
    <>
      {label && `${label}:`}
      <div className={classes['bar-outer']}>
        <div className={classes.factor}>{`${factor.toFixed(1)}%`}</div>
        <div
          className={classes['bar-inner']}
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
