import React from 'react';
import Button from '@/components/UI/Button';
import { MoveState } from '@/types';
import BattleLog from './BattleLog';
import Sprite from '@/components/UI/Sprite';

type Props = {
  onEventFinished: () => void;
  onExperienceGained: (amount: number) => void;
  result: MoveState;
};

const Battle = ({ onEventFinished, result }: Props) => {
  if (!result.battleLog) return <div>loading</div>;

  console.log(result)
  // const [battleInProgress, setBattleInProgress] = useState(true);

  // const handleLeaveBattle = () => {
  //   setBattleInProgress(false);
  //   onEventFinished();
  // };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <Sprite spriteCount={4} spriteSize={16} spritesheetURL={result.battleLog.monsterSpritesheet}/>
      <p className="md:text-2xl">
        I have fought a battle with {result.battleLog.monsterName}
      </p>
      <BattleLog log={result.battleLog.log} />
      <Button onClick={onEventFinished}>Continue</Button>
    </div>
  );
};

export default Battle;
