import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import goldIcon from '../../Logic/Resources/Icons/gold.png';
import Equipment from './Equipment';
import Consumables from './Consumables';

function Inventory() {
  const inventory = useSelector((state) => state.inventory);

  return (
    <Card>
      <div>
        <img src={goldIcon} style={{ width: '30px' }} alt='' /> {inventory.gold}
      </div>
      <Equipment inventoryItems={inventory.items} />
      <Consumables inventoryItems={inventory.items} />
    </Card>
  );
}

export default Inventory;
