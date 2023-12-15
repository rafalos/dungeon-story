import React from 'react';
import classes from './BattleActions.module.css';
import Button from '@/components/UI/Button';

function BattleActions({ onBasicAttack }) {
  return (
    <div className={classes.actions}>
      <Button onClick={onBasicAttack}>A</Button>
      <Button onClick={onBasicAttack}>S</Button>
    </div>
  );
}

export default BattleActions;
