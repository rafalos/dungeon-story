import React, { useEffect, useState } from 'react';
import { EntityType, type LogItem } from '@/types';
import { waitForSecondsAndResolve } from '@/utils/async';

type Props = {
  log: LogItem[];
  onDamageTaken: (entityType: EntityType, amount: number) => void;
};

function BattleLog({ log, onDamageTaken }: Props) {
  const [currentLog, setCurrentLog] = useState<string[]>([]);

  useEffect(() => {
    const updateCurrentLog = async () => {
      for (const [index, value] of log.entries()) {
        const item = await waitForSecondsAndResolve(1, value);
        let logEntry = '';
        if (index % 2 == 0) {
          logEntry = 'Player';
          onDamageTaken('enemy', value.dealt);
        } else {
          logEntry = 'Monster';
          onDamageTaken('player', value.dealt);
        }
        logEntry += ` performs an attack for ${item.dealt} health points`;

        setCurrentLog((prevLog) => [...prevLog, logEntry]);
      }
    };
    updateCurrentLog();
  }, [log]);

  return (
    <ul className="flex max-h-[250px] flex-col gap-2 overflow-auto rounded-md bg-black p-4 text-sm text-white">
      {currentLog.map((string, index) => (
        <li
          key={index}
          className={`font-bold ${
            index % 2 === 0 ? 'text-customGreen' : 'text-customYellow'
          }`}
        >
          {string}
        </li>
      ))}
    </ul>
  );
}

export default BattleLog;
