import React from 'react';
import classes from './ExplorationSummary.module.css';
import Item from '../UI/Item';
import Button from '../UI/Button';

function ExplorationSummary({
  ending,
  onFinished,
  totalExperienceGained,
  totalItemsFound,
}) {
  const foundItems = totalItemsFound.map((item) => (
    <Item key={item.id} item={item} />
  ));
  return (
    <div className={classes['summary-wrapper']}>
      <div>{ending}</div>
      <div className='flex-column-container'>
        During your expedition you have gained {totalExperienceGained} total
        experience and found:
        <div>{totalItemsFound.length > 0 ? foundItems : 'No items'}</div>
      </div>
      <Button onClick={onFinished}>Leave exploration</Button>
    </div>
  );
}

export default ExplorationSummary;
