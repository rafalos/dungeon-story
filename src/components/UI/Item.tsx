import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';
import { Tooltip } from 'react-tooltip';
import { type Equipment } from '@/types';
import { motion } from 'framer-motion';

type Props = {
  item: Equipment;
  onItemClicked: (item: Equipment) => void;
};

function Item({ item, onItemClicked }: Props) {
  const { id, slot, classType, icon, modifiers } = item;

  let baseAttribute: string | null = null;

  switch (item.descriptor) {
    case 'weapon':
      baseAttribute = `damage: ${item.damage}`;
      break;
    case 'wearable':
      baseAttribute = `armor: ${item.armor}`;
      break;
  }

  const clickHandler = (clickedItem: Equipment) => {
    onItemClicked(clickedItem);
  };

  return (
    <motion.div
      animate={{
        y: 5,
      }}
      key={id}
      data-tooltip-id={id}
      onClick={() => clickHandler(item)}
      className={`p-6 shadow-md md:p-7 ${classes['inventory-item']} ${
        equipmentClasses[`equipment-item--${slot}`]
      } ${classes[`inventory-item--${classType}`]}
    ${`equipment-item--${slot}`}`}
      style={{ backgroundImage: `url(${icon})` }}
    >
      {/* {stackable && <div className={classes.amount}>{item.amount}</div>} */}

      <Tooltip
        id={id}
        className={`${classes.tooltip} flex flex-col border ${
          classes[`tooltip--${classType}`]
        }`}
        noArrow
        offset={5}
        style={{
          padding: '24px',
        }}
      >
        <div
          className={`flex flex-col ${classes[`tooltip-desc--${classType}`]}`}
        >
          <span className="text-xl font-bold">{item.name}</span>
          <span className="border-b border-dotted py-2 text-sm italic">
            {classType} {slot}
          </span>
        </div>
        <ul className="my-2 text-lg">
          <li>{baseAttribute && baseAttribute}</li>
          {modifiers.map((modifier) => {
            const [attributeName, amount] = modifier;

            return (
              <li key={`${attributeName}${amount}`}>
                {attributeName}: {amount}
              </li>
            );
          })}
        </ul>
      </Tooltip>
    </motion.div>
  );
}

export default Item;
