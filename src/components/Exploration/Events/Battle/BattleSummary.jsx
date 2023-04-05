import React from 'react';
import Item from '../../../UI/Item';

function BattleSummary({ onLeaveBattle, battleSummary }) {
  return (
    <div className='flex-column-container'>
      <div>You have gained {battleSummary.experienceGained} experience</div>
      <div>You have found following items: </div>
      <div>
        {battleSummary.itemsFound.map((item) => (
          <Item item={item} />
        ))}
      </div>
      <button onClick={onLeaveBattle}>Leave</button>
    </div>
  );
}

export default BattleSummary;
