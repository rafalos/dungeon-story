import React from 'react';
import Equipment from '../Equipment/Equipment';
import Statistics from '../Statistics/Statistics';
import Inventory from './Inventory';

function Character() {
  return (
    <div style={{ display: 'flex', gap: '70px' }}>
      <div className='character-details'>
        <h2>Statistics</h2>
        <Statistics />
      </div>
      <div>
        <Equipment />
      </div>
      <div className='inventory-details'>
        <Inventory />
      </div>
    </div>
  );
}

export default Character;
