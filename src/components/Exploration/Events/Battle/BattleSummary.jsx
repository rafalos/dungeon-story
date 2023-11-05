import React from 'react';
import Item from '../../../UI/Item';
import Button from '@/components/UI/Button';

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
      <Button onClick={onLeaveBattle}>Leave</Button>
    </div>
  );
}

export default BattleSummary;
