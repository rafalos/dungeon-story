import React from 'react';
import classes from './ExplorationSummary.module.css';
import Item from '../UI/Item';

function ExplorationSummary({
  ending,
  onFinished,
  totalExperienceGained,
  totalItemsFound,
}) {
  return (
    <div className={classes['summary-wrapper']}>
      <div>{ending}</div>
      <div className='flex-column-container'>
        During your expedition you have gained {totalExperienceGained} total
        experience and found items:
        <div>
          {' '}
          {totalItemsFound.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
      <button onClick={onFinished}>Leave exploration</button>
    </div>
  );
}

export default ExplorationSummary;
