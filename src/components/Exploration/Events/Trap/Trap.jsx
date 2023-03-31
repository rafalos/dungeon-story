import React from 'react';

function Trap({ onEventFinished }) {
  return (
    <div>
      You have fallen into a trap. This results in losing 10% hp!{' '}
      <button onClick={onEventFinished}>Proceed</button>
    </div>
  );
}

export default Trap;
