import React from 'react';
import classes from './BattleActions.module.css';

function BattleActions({ onBasicAttack }) {
  return (
    <div className={classes.actions}>
      <button className={classes.action} onClick={onBasicAttack}>
        A
      </button>
      <button className={classes.action} onClick={onBasicAttack}>
        S
      </button>
    </div>
  );
}

export default BattleActions;
