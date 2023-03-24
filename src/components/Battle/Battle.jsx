import React from 'react';
import { useState } from 'react';
import BattleFrame from './BattleFrame';
import BattleSearch from './BattleSearch';
import { useDispatch } from 'react-redux';
import { playerStatusActions } from '../../store/player-status-slice';
import Card from '../UI/Card';

function Battle() {
  const [battleInProgress, setBattleInProgress] = useState(false);
  const dispatch = useDispatch()

  const handleEnterBattle = () => {
    setBattleInProgress(true)
  }

  const handleLeaveBattle = () => {
    setBattleInProgress(false)
    dispatch(playerStatusActions.restorePlayer())
  }

  return (
    <Card>
      {battleInProgress ? <BattleFrame onLeaveBattle={handleLeaveBattle}/> : <BattleSearch onEnterBattle={handleEnterBattle}/>}
    </Card>
  );
}

export default Battle;
