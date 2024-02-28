import React, { useState } from 'react';
import Button from '@/components/UI/Button';

function Treasure({ onEventFinished }) {
  const [collected, setCollected] = useState(true);

  const chestOpenedHandler = () => {
    setCollected(true);
  };

  return (
    <div>
      {collected ? (
        <div className="flex-column-container">
          You have found items:
          {/* <div>
            {foundItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div> */}
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
