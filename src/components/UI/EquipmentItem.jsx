import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { playerEquipmentActions } from '../../store/player-equipment-slice';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import { playerInventoryActions } from '../../store/player-inventory-slice';
import classes from './Item.module.css';

function Item({ item, equipable }) {
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
    dispatch(
      playerEquipmentActions.unequipItem({
        equipmentSlot: item.equipmentSlot,
      })
    );

    dispatch(
      playerInventoryActions.addSingleItem({
        item,
      })
    );
  };

  const equipHandler = () => {
    if (!equipable) return;
    dispatch(
      playerEquipmentActions.equipItem({
        item,
      })
    );

    dispatch(
      playerStatisticActions.increaseStat({
        statistics: item.metadata,
      })
    );

    dispatch(
      playerInventoryActions.removeItem({
        id: item.id,
      })
    );
  };

  return (
    <>
      {item ? (
        <div
          onClick={equipable ? equipHandler : unequipHandler}
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
