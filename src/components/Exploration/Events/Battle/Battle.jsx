import React from 'react';
import { useState } from 'react';
import BattleFrame from './BattleFrame';
import BattleSearch from './BattleSearch';
import { useDispatch } from 'react-redux';
import { playerStatisticActions } from '../../../../store/player-statistics-slice';
import Card from '../../../UI/Card';

function Battle({ onEventFinished }) {
  const [battleInProgress, setBattleInProgress] = useState(true);
  const dispatch = useDispatch();

  const handleLeaveBattle = () => {
    setBattleInProgress(false);
    onEventFinished();
    dispatch(playerStatisticActions.restorePlayer());
  };

  return (
    <Card>
      <BattleFrame onLeaveBattle={handleLeaveBattle} />
    </Card>
  );
}

export default Battle;
