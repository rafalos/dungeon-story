import React, { useState } from 'react';
import Button from '@/components/UI/Button';
import { EntityType, MoveState } from '@/types';
import BattleLog from './BattleLog';
import BattleEntityPanel from './BattleEntityPanel';

type Props = {
  onEventFinished: () => void;
  onExperienceGained: (amount: number) => void;
  result: MoveState;
};

const Battle = ({ onEventFinished, result }: Props) => {
  if (!result.battleLog) return <div>loading</div>;
  const [currentHealth, setCurrentHealth] = useState(
    result.battleLog.enemy.health
  );

  const onDamageTaken = (entityType: EntityType, damageAmount: number) => {
    if (entityType === 'enemy') {
      setCurrentHealth((prevHealth) => prevHealth - damageAmount);
    }
  };

  console.log(result);
  // const [battleInProgress, setBattleInProgress] = useState(true);

  // const handleLeaveBattle = () => {
  //   setBattleInProgress(false);
  //   onEventFinished();
  // };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2>I have fought a battle</h2>
      <div className="flex items-center gap-4">
        <BattleEntityPanel
          {...result.battleLog.enemy}
          currentHealth={currentHealth}
        />
        <BattleLog log={result.battleLog.log} onDamageTaken={onDamageTaken} />
      </div>
      <Button onClick={onEventFinished}>Continue</Button>
    </div>
  );
};

export default Battle;
