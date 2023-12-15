import React from 'react';
import classes from './BattleFrame.module.css';

function BattleLog({ log }) {
  return (
    <ul className={classes.log}>
      {log.map((logEntry) => (
        <li key={logEntry.id}>{logEntry.entry}</li>
      ))}
    </ul>
  );
}

export default BattleLog;
