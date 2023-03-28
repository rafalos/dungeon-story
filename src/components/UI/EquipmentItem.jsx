import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { equipItem, unequipItem } from '../../store/player-equipment-slice';
import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';

function Item({ item, equipable, slot }) {
  const dispatch = useDispatch();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  let metadataElements = [];

  useEffect(() => {
    setTooltipVisible(false);
  }, [item]);

  for (const metadata in item?.metadata) {
    metadataElements.push(`${metadata}: ${item.metadata[metadata]}`);
  }

  const handleShowTooltip = () => {
    setTooltipVisible(true);
  };

  const handleHideTooltip = () => {
    setTooltipVisible(false);
  };

  const unequipHandler = () => {
    dispatch(unequipItem(item));
  };

  const equipHandler = () => {
    if (!equipable) return;

    dispatch(equipItem(item));
  };

  return (
    <>
      {item ? (
        <div
          onClick={equipable ? equipHandler : unequipHandler}
          onMouseEnter={handleShowTooltip}
          onMouseLeave={handleHideTooltip}
          className={`${classes['inventory-item']} ${
            equipmentClasses[`equipment-item--${item.equipmentSlot}`]
          } ${classes[`inventory-item--${item.classType}`]}
          ${`equipment-item--${item.equipmentSlot}`}`}
          style={{ backgroundImage: `url(${item.icon})` }}
        >
          {tooltipVisible && (
            <div
              className={`${classes.tooltip} ${
                classes[`tooltip--${item.classType}`]
              }`}
            >
              <span>{item.name}</span>
              <ul className={classes[`metadata-list`]}>
                {metadataElements.map((metadata) => (
                  <li key={metadata}>{metadata}</li>
                ))}
              </ul>
              {item.classType}
            </div>
          )}
        </div>
      ) : (
        <div
          className={`${classes['inventory-item']}
          ${equipmentClasses[`equipment-item--${slot}`]}
        `}
        ></div>
      )}
    </>
  );
}

export default Item;
