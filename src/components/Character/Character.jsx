import React from 'react';
import Equipment from '../Equipment/Equipment';
import Statistics from '../Statistics/Statistics';
import Inventory from './Inventory';

function Character({ character }) {
  return (
    <div className='flex justify-around w-full'>
      <Inventory items={character.inventory.equipment} />
      <Equipment />
      <Statistics />
    </div>
  );
}

export default Character;
