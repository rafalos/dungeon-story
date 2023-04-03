import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../UI/Item';
import classes from './Equipment.module.css';
import { unequipItem } from '../../store/player-equipment-slice';

function Equipment() {
  const playerEquipment = useSelector((state) => state.equipment);
  const elements = [];
  const dispatch = useDispatch();

  for (const equipment in playerEquipment) {
    elements.push([equipment, playerEquipment[equipment]]);
  }

  const itemClickHandler = (item) => {
    dispatch(unequipItem(item))
  }

  return (
    <>
      <div className={classes['equipment-container']}>
        {elements.map((element) => (
          <Item slot={element[0]} item={element[1]} onItemClicked={itemClickHandler}/>
        ))}
      </div>
    </>
  );
}

export default Equipment;
