import React from 'react';
import { useState } from 'react';
import BattleFrame from './BattleFrame';
import Card from '../../../UI/Card';

function Battle({ onEventFinished, onItemFound, onExperienceGained }) {
  const [battleInProgress, setBattleInProgress] = useState(true);

  const handleLeaveBattle = () => {
    setBattleInProgress(false);
    onEventFinished();
  };

  return (
    <Card>
      <BattleFrame onLeaveBattle={handleLeaveBattle} onItemFound={onItemFound} onExperienceGained={onExperienceGained}/>
    </Card>
  );
}

export default Battle;
