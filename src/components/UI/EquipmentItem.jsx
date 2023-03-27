import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { playerEquipmentActions } from '../../store/player-equipment-slice';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import classes from './Item.module.css';

function Item({ item, equipable }) {
  const dispatch = useDispatch();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  let metadataElements = [];

  for (const metadata in item?.metadata) {
    metadataElements.push(`${metadata}: ${item.metadata[metadata]}`);
  }

  const handleShowTooltip = () => {
    setTooltipVisible(true);
  };

  const handleHideTooltip = () => {
    setTooltipVisible(false);
  };

  const equipHandler = () => {
    if (!equipable) return;
    dispatch(
      playerEquipmentActions.equipItem({
        item,
      })
    );

    dispatch(playerStatisticActions.increaseStat({
      statistics: item.metadata
    }))
  };

  return (
    <>
      {item ? (
        <div
          onClick={equipHandler}
          onMouseEnter={handleShowTooltip}
          onMouseLeave={handleHideTooltip}
          className={`${classes['inventory-item']} ${
            classes[`inventory-item--${item.classType}`]
          }`}
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
        }`}
        ></div>
      )}
    </>
  );
}

export default Item;
