import React from 'react';
import classes from './BattleFrame.module.css';
import { type LogItem } from '@/types';

type Props = {
  log: LogItem[];
};

function BattleLog({ log }: Props) {
  return (
    <ul>
      {log.map(({ dealt, monsterHealth, playerHealth, taken }, index) => (
        <li key={dealt + playerHealth + monsterHealth}>
          {index % 2 == 0 ? 'Player' : 'Monster'} hits for {dealt}
        </li>
      ))}
    </ul>
  );
}

export default BattleLog;
