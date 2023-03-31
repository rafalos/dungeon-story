import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { playerStatisticActions } from '../../../../store/player-statistics-slice';
import { randomInRange } from '../../../../utils/random';

function Trap({ onEventFinished }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      playerStatisticActions.takeDamage({
        amount: randomInRange(10, 40),
      })
    );
  }, []);

  return (
    <div>
      You have fallen into a trap. This results in losing 10% hp!{' '}
      <button onClick={onEventFinished}>Proceed</button>
    </div>
  );
}

export default Trap;
