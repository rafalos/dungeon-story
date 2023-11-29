import React from 'react';
import Equipment from '../Equipment/Equipment';
import Statistics from '../Statistics/Statistics';
import Inventory from './Inventory';

function Character({ character }) {
  return (
    <div className='flex justify-around w-full'>
      <Statistics />
      <Equipment />
      <Inventory items={character.inventory.equipment} />
    </div>
  );
}

export default Character;
