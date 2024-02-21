import React, { useState, useEffect } from 'react';
import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';
import { useDispatch } from 'react-redux';
import { deductStackable } from '../../store/player-inventory-slice';
import { Tooltip } from 'react-tooltip';

function StackableItem({ item }) {
  const dispatch = useDispatch();

  const consumeItemHandler = () => {
    dispatch(
      deductStackable({
        itemID: item.id,
      })
    );
  };

  return (
    <>
      <div
        data-tooltip-id="item"
        onClick={consumeItemHandler}
        className={`${classes['inventory-item']} ${
          equipmentClasses[`equipment-item--${item.equipmentSlot}`]
        } ${classes[`inventory-item--${item.classType}`]}
          ${`equipment-item--${item.equipmentSlot}`}`}
        style={{ backgroundImage: `url(${item.icon})` }}
      >
        <div className={classes.amount}>{item.amount}</div>

        <Tooltip
          id="item"
          className={`${classes.tooltip} ${
            classes[`tooltip--${item.classType}`]
          }`}
        >
          <span>{item.name}</span>
          {item.classType}
        </Tooltip>
      </div>
    </>
  );
}

export default StackableItem;
