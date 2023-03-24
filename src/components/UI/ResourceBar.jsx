import React from 'react';
import classes from './ResourceBar.module.css';

function ResourceBar({ currentResource, maxResource }) {
  return (
    <div className={classes['bar-outer']}>
      <div
        className={classes['bar-inner']}
        style={{
          background: 'red',
          width: `${(currentResource / maxResource) * 100}%`,
        }}
      >
        {currentResource}/{maxResource}
      </div>
    </div>
  );
}

export default ResourceBar;
