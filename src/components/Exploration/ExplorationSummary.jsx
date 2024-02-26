import React from 'react';
import classes from './ExplorationSummary.module.css';
import Item from '../UI/Item';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Typer from '../UI/Typer';
import Card from '../UI/Card';

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
    <Card className={classes['summary-wrapper']}>
      <div className='italic'>
      <Typer text={ending} delay={20}/>

      </div>
      <div className="flex-column-container">
        During your expedition you have gained {totalExperienceGained} total
        experience and found:
        <div>{totalItemsFound.length > 0 ? foundItems : 'No items'}</div>
      </div>
      <Link to="..">
        <Button>Leave exploration</Button>
      </Link>
    </Card>
  );
}

export default ExplorationSummary;
