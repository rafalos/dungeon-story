import React from 'react';
import Button from '@/components/UI/Button';
import { MoveState } from '@/types';
import BattleLog from './BattleLog';

type Props = {
  onEventFinished: () => void;
  onExperienceGained: (amount: number) => void;
  result: MoveState;
};

const Battle = ({ onEventFinished, result }: Props) => {
  if (!result) return <div>loading</div>;
  // const [battleInProgress, setBattleInProgress] = useState(true);

  // const handleLeaveBattle = () => {
  //   setBattleInProgress(false);
  //   onEventFinished();
  // };

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="md:text-2xl">
        I have fought a battle with {result.battleLog?.monsterName}
      </p>
      <BattleLog log={result.battleLog?.log} />
      <Button onClick={onEventFinished}>Continue</Button>
    </div>
  );
};

export default Battle;
