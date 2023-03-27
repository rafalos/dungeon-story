import React from 'react';
import Item from '../UI/Item';

function BattleSummary({ onLeaveBattle, battleSummary }) {
  console.log(battleSummary)
  return (
    <div>
      Result <button onClick={onLeaveBattle}>Leave</button>
      You have gained {battleSummary.experienceGained} experience
      And you have found: {battleSummary.itemsFound.map(item => <Item item={item}/>)}
    </div>
  );
}

export default BattleSummary;
