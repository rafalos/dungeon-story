import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BattleFrame from './BattleFrame';
import BattleSearch from './BattleSearch';
import { useDispatch } from 'react-redux';
import { playerStatusActions } from '../../store';

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
    <div>
      {battleInProgress ? <BattleFrame onLeaveBattle={handleLeaveBattle}/> : <BattleSearch onEnterBattle={handleEnterBattle}/>}
    </div>
  );
}

export default Battle;
