import React, { useState, useEffect } from 'react';
import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';
import { useDispatch } from 'react-redux';
import { playerInventoryActions } from '../../store/player-inventory-slice';

function StackableItem({ item }) {
  const dispatch = useDispatch();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    setTooltipVisible(false);
  }, [item]);

  const handleShowTooltip = () => {
    setTooltipVisible(true);
  };

  const handleHideTooltip = () => {
    setTooltipVisible(false);
  };

  const consumeItemHandler = () => {
    dispatch(playerInventoryActions.deductStackable({
      itemID: item.id
    }))
  };

  return (
    <>
      <div
        onClick={consumeItemHandler}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
        className={`${classes['inventory-item']} ${
          equipmentClasses[`equipment-item--${item.equipmentSlot}`]
        } ${classes[`inventory-item--${item.classType}`]}
          ${`equipment-item--${item.equipmentSlot}`}`}
        style={{ backgroundImage: `url(${item.icon})` }}
      >
        <div className={classes.amount}>{item.amount}</div>
        {tooltipVisible && (
          <div
            className={`${classes.tooltip} ${
              classes[`tooltip--${item.classType}`]
            }`}
          >
            <span>{item.name}</span>
            {item.classType}
          </div>
        )}
      </div>
    </>
  );
}

export default StackableItem;
