import React from 'react';
import { useState } from 'react';
import BattleFrame from './BattleFrame';

function Battle({
  onEventFinished,
  onItemFound,
  onExperienceGained,
  onPlayerDeath,
}) {
  const [battleInProgress, setBattleInProgress] = useState(true);

  const handleLeaveBattle = () => {
    setBattleInProgress(false);
    onEventFinished();
  };

  return (
    <>
      <BattleFrame
        onPlayerDeath={onPlayerDeath}
        onLeaveBattle={handleLeaveBattle}
        onItemFound={onItemFound}
        onExperienceGained={onExperienceGained}
      />
    </>
  );
}

export default Battle;
