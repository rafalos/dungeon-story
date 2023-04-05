import React, { useState } from 'react';
import { generateLoot } from '../../../../Logic/Generator/loot';
import { LOOT_BRACKERS } from '../../../../Logic/Resources/tables/lootTable';
import { useDispatch } from 'react-redux';
import { playerInventoryActions } from '../../../../store/player-inventory-slice';
import Item from '../../../UI/Item';

function Treasure({ onEventFinished }) {
  const [collected, setCollected] = useState(false);
  const [foundItems, setFoundItems] = useState([]);

  const dispatch = useDispatch();
  const chestOpenedHandler = () => {
    const randomLoot = generateLoot(LOOT_BRACKERS.MONSTER);
    setFoundItems(randomLoot);
    dispatch(
      playerInventoryActions.addMultipleItems({
        items: randomLoot,
      })
    );

    setCollected(true);
  };

  return (
    <div>
      {collected ? (
        <div>
          You have found items:
          {foundItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
          <button onClick={onEventFinished}>Proceed</button>
        </div>
      ) : (
        <div>
          You found a treasure chest!
          <button onClick={chestOpenedHandler}>Open</button>
        </div>
      )}
    </div>
  );
}

export default Treasure;
