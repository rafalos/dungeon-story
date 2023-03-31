import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import Equipment from '../Equipment/Equipment';
import Statistics from '../Statistics/Statistics';
import Inventory from './Inventory';

function Character() {
  return (
    <Card style={{ display: 'flex', gap: '10px' }}>
      <div className='character-details'>
        <Equipment />
        <Statistics />
      </div>
      <div className='inventory-details'>
        <Inventory />
      </div>
    </Card>
  );
}

export default Character;
