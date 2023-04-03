import React from 'react';
import classes from './ExplorationSummary.module.css';

function ExplorationSummary({ ending, onFinished, totalExperienceGained }) {
  return (
    <div className={classes['summary-wrapper']}>
      <div>{ending}</div>
      <div>
        During your expedition you have gained {totalExperienceGained} total experience and found
        items:
      </div>
      <button onClick={onFinished}>Leave exploration</button>
    </div>
  );
}

export default ExplorationSummary;
