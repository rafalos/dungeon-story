import React from 'react';
import classes from './ResourceBar.module.css';

function ResourceBar({ currentResource, maxResource, percentage }) {

  
  const factor = !isNaN(percentage) ? percentage : ((currentResource / maxResource) * 100)
  const status = percentage ? `${percentage}%` : `${currentResource} / ${maxResource}`
  
  return (
    <div className={classes['bar-outer']}>
      <div
        className={classes['bar-inner']}
        style={{
          background: 'red',
          width: `${factor}%`,
        }}
      >
        
      </div>
    </div>
  );
}

export default ResourceBar;
