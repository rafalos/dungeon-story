import React from 'react';
import { useSelector } from 'react-redux';
import EquipmentItem from '../UI/EquipmentItem'
import Card from '../UI/Card';

function Equipment() {
  const playerEquipment = useSelector((state) => state.equipment);
  const elements = []

  for (const equipment in playerEquipment) {
    elements.push(playerEquipment[equipment])
  } 

  console.log(elements)

  return <Card>{elements.map(element => <EquipmentItem item={element}/>)}</Card>;
}

export default Equipment;
