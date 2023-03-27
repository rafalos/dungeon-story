import React, { useState, useRef } from 'react';
import classes from './Item.module.css';

function Item({ item }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  let metadataElements = [];

  for (const metadata in item.metadata) {
    metadataElements.push(`${metadata}: ${item.metadata[metadata]}`);
  }

  const handleShowTooltip = () => {
    setTooltipVisible(true);
  };

  const handleHideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
      className={`${classes['inventory-item']} ${
        classes[`inventory-item--${item.classType}`]
      }`}
      style={{ backgroundImage: `url(${item.icon})` }}
    >
      {tooltipVisible && (
        <div className={classes.tooltip}>
          <span>{item.name}</span>
          <ul className={classes[`metadata-list`]}>
            {metadataElements.map((metadata) => (
              <li key={metadata}>{metadata}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Item;
