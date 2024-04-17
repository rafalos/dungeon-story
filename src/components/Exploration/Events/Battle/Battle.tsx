import React, { useState } from 'react';
import Button from '@/components/UI/Button';
import { EntityType, MoveState } from '@/types';
import BattleLog from './BattleLog';
import BattleEntityPanel from './BattleEntityPanel';
import { useAppSelector } from '@/store';

type Props = {
  onEventFinished: () => void;
  onExperienceGained: (amount: number) => void;
  result: MoveState;
};

const Battle = ({ onEventFinished, result }: Props) => {
  const { user } = useAppSelector((state) => state.user);
  if (!result.battleLog || !user) return <div>loading</div>;
  const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(
    result.battleLog.enemy.health
  );

  const [playerCurrentHealth, setPlayerCurrentHealth] = useState(
    result.battleLog.startingHealth
  );

  const onDamageTaken = (entityType: EntityType, damageAmount: number) => {
    if (entityType === 'enemy') {
      setEnemyCurrentHealth((prevHealth) => prevHealth - damageAmount);
    } else {
      setPlayerCurrentHealth((prevHealth) => prevHealth - damageAmount);
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
          currentHealth={enemyCurrentHealth}
        />
        <BattleLog log={result.battleLog.log} onDamageTaken={onDamageTaken} />
        <BattleEntityPanel
          armor={user.armor}
          damage={user.damage}
          health={result.battleLog.startingHealth}
          name="Player"
          strength={user.attributes.strength}
          vitality={user.attributes.vitality}
          currentHealth={playerCurrentHealth}
        />
      </div>
      <Button onClick={onEventFinished}>Continue</Button>
    </div>
  );
};

export default Battle;
