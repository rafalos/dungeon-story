import React from 'react';

function BattleSummary({ onLeaveBattle, battleSummary }) {
  return (
    <div>
      Result <button onClick={onLeaveBattle}>Leave</button>
      You have gained {battleSummary.experienceGained} experience
      You have gained {battleSummary.itemsFound.length}
    </div>
  );
}

export default BattleSummary;
