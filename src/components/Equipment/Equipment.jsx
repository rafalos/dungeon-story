import React from 'react';
import { useSelector } from 'react-redux';

function Equipment() {
  const playerEquipment = useSelector((state) => state.equipment);

  for (const equipment in playerEquipment) {
    console.log(equipment)
  } 

  return <div>Equipment</div>;
}

export default Equipment;
