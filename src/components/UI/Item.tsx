import classes from './Item.module.css';
import equipmentClasses from '../Equipment/Equipment.module.css';
import { Tooltip } from 'react-tooltip';
import { type Equipment } from '@/types';

type Props = {
  item: Equipment;
  onItemClicked: (item: Equipment) => void;
};

function Item({ item, onItemClicked }: Props) {
  const { id, slot, classType, icon, modifiers } = item;

  let baseAttribute: string | null = null;

  switch (item.descriptor) {
    case 'weapon':
      baseAttribute = `Damage: ${item.damage}`;
      break;
    case 'wearable':
      baseAttribute = `Armor: ${item.armor}`;
      break;
  }

  const clickHandler = (item: Equipment) => {
    onItemClicked(item);
  };

  return (
    <>
      <div
        key={id}
        data-tooltip-id={id}
        onClick={() => clickHandler(item)}
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
          {baseAttribute && baseAttribute}
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
