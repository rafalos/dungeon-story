import React, { useState } from 'react';
import { generateLoot } from '../../../../Logic/Generator/loot';
import { LOOT_BRACKERS } from '../../../../Logic/Resources/tables/lootTable';
import { useDispatch } from 'react-redux';
import { addMultipleItems } from '../../../../store/player-inventory-slice';
import Item from '../../../UI/Item';
import Button from '@/components/UI/Button';

function Treasure({ onEventFinished }) {
  const [collected, setCollected] = useState(false);
  const [foundItems, setFoundItems] = useState([]);

  const dispatch = useDispatch();
  const chestOpenedHandler = () => {
    const randomLoot = generateLoot(LOOT_BRACKERS.MONSTER);
    setFoundItems(randomLoot);
    dispatch(
      addMultipleItems({
        items: randomLoot,
      })
    );

    setCollected(true);
  };

  return (
    <div>
      {collected ? (
        <div className="flex-column-container">
          You have found items:
          <div>
            {foundItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
          <Button onClick={onEventFinished}>Continue exploration</Button>
        </div>
      ) : (
        <div className="flex-column-container">
          You found a treasure chest!
          <Button onClick={chestOpenedHandler}>Open</Button>
        </div>
      )}
    </div>
  );
}

export default Treasure;
