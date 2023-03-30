import React, { useState, useEffect } from 'react';
import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';

function Item({ item, slot, onItemClicked, stackable }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  let metadataElements = [];

  useEffect(() => {
    setTooltipVisible(false);
  }, [item]);

  for (const metadata in item?.metadata) {
    metadataElements.push(`${metadata}: ${item.metadata[metadata]}`);
  }

  const clickHandler = () => {
    onItemClicked(item);
  };

  const handleShowTooltip = () => {
    setTooltipVisible(true);
  };

  const handleHideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <>
      {item ? (
        <div
          onClick={clickHandler}
          onMouseEnter={handleShowTooltip}
          onMouseLeave={handleHideTooltip}
          className={`${classes['inventory-item']} ${
            equipmentClasses[`equipment-item--${item.equipmentSlot}`]
          } ${classes[`inventory-item--${item.classType}`]}
          ${`equipment-item--${item.equipmentSlot}`}`}
          style={{ backgroundImage: `url(${item.icon})` }}
        >
          {stackable && <div className={classes.amount}>{item.amount}</div>}
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
