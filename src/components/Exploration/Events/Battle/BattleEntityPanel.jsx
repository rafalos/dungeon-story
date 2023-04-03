import React from 'react';
import ResourceBar from '../../../UI/ResourceBar';
import classes from './BattleEntity.module.css';

function BattleEntityPanel({ entity }) {
  return (
    <div className={classes.entity}>
      <img className={classes.image} src={entity.icon} alt='' />
      <div>{entity.name}</div>
      <ResourceBar
        currentResource={entity.currentHealth}
        maxResource={entity.maxHealth}
      />
    </div>
  );
}

export default BattleEntityPanel;
