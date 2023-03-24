import React from 'react';

function BattleSummary({ onLeaveBattle, battleSummary }) {
  return (
    <div>
      Result <button onClick={onLeaveBattle}>Leave</button>
      {battleSummary.experienceGained}
    </div>
  );
}

export default BattleSummary;
