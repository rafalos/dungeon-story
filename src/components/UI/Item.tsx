import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';
import { Tooltip } from 'react-tooltip';
import { type Equipment } from '@/types';

type Props = {
  item: Equipment;
  onItemClicked: (itemID: string) => void;
};

function Item({ item, onItemClicked }: Props) {
  const { id, slot, classType, icon, modifiers } = item;

  const clickHandler = (itemID: string) => {
    onItemClicked(itemID);
  };

  return (
    <>
      <div
        key={id}
        data-tooltip-id={id}
        onClick={() => clickHandler(id)}
        className={`rounded-md ${classes['inventory-item']} ${
          equipmentClasses[`equipment-item--${slot}`]
        } ${classes[`inventory-item--${classType}`]}
    ${`equipment-item--${slot}`}`}
        style={{ backgroundImage: `url(${icon})` }}
      >
        {/* {stackable && <div className={classes.amount}>{item.amount}</div>} */}

        <Tooltip
          id={id}
          className={`z-50 flex flex-col items-center justify-center border-4`}
        >
          <span className="text-lg font-medium">{item.name}</span>
          <ul className="my-2 text-base"></ul>
          {modifiers.map((modifier) => {
            const [attributeName, amount] = modifier;

            return (
              <li key={`${attributeName}${amount}`}>
                {attributeName}: {amount}
              </li>
            );
          })}
          <div>{classType}</div>
        </Tooltip>
      </div>
    </>
  );
}

export default Item;
