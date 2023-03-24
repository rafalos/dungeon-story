import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';

function Inventory() {
  const inventory = useSelector((state) => state.inventory);
  
  return <Card>{inventory.items.map((item) => <img key={item.id} src={item.icon}></img>)}</Card>;
}

export default Inventory;
