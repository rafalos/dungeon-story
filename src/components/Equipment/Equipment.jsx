import React from 'react';
import { useSelector } from 'react-redux';
import EquipmentItem from '../UI/EquipmentItem';
import Card from '../UI/Card';
import classes from './Equipment.module.css';

function Equipment() {
  const playerEquipment = useSelector((state) => state.equipment);
  const elements = [];

  for (const equipment in playerEquipment) {
    elements.push([equipment, playerEquipment[equipment]]);
  }

  return (
    <Card>
      <div className={classes['equipment-container']}>
        {elements.map((element) => (
          <EquipmentItem slot={element[0]} item={element[1]} />
        ))}
      </div>
    </Card>
  );
}

export default Equipment;
