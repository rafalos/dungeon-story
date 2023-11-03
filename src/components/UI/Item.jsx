import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';
import { Tooltip } from 'react-tooltip';
import { useId } from 'react';

function Item({ item, slot, onItemClicked, stackable, price, id }) {
  const elementId = useId();
  let metadataElements = [];

  for (const metadata in item?.metadata) {
    metadataElements.push(`${metadata}: ${item.metadata[metadata]}`);
  }

  const clickHandler = () => {
    onItemClicked(item, price);
  };

  return (
    <>
      {item ? (
        <div
          key={id}
          data-tooltip-id={elementId}
          onClick={clickHandler}
          className={`${classes['inventory-item']} ${
            equipmentClasses[`equipment-item--${item.equipmentSlot}`]
          } ${classes[`inventory-item--${item.classType}`]}
          ${`equipment-item--${item.equipmentSlot}`}`}
          style={{ backgroundImage: `url(${item.icon})` }}
        >
          {stackable && <div className={classes.amount}>{item.amount}</div>}

          <Tooltip
            id={elementId}
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
            <div>
              {item.classType} sell: {item.sellPrice}
            </div>
            {price && <div>Cost: {price}</div>}
          </Tooltip>
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
