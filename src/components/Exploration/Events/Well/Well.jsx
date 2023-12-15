import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerStatusActions } from '../../../../store/player-status-slice';
import { playerStatisticActions } from '../../../../store/player-statistics-slice';
import Button from '@/components/UI/Button';

function Well({ onEventFinished }) {
  const { maxExperience } = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const [drunkFromWell, setDrunkFromWell] = useState(false);
  const drinkHandler = () => {
    dispatch(
      playerStatusActions.addExperience({
        experience: maxExperience,
      })
    );
    dispatch(playerStatisticActions.restoreFullHealth());
    setDrunkFromWell(true);
  };

  return (
    <div>
      {drunkFromWell ? (
        <div className="flex-column-container">
          You feel refreshed and gained knowledge after you drunk from well
          <Button onClick={onEventFinished}>Continue exploration</Button>
        </div>
      ) : (
        <div className="flex-column-container">
          You have found a mysterious well
          <Button onClick={drinkHandler}>Drink</Button>
        </div>
      )}
    </div>
  );
}

export default Well;
