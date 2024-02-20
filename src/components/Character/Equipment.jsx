import Item from '../UI/Item';
import { useDispatch } from 'react-redux';
import { equipItem } from '../../store/player-equipment-slice';
import { itemSold } from '../../store/player-inventory-slice';
import Container from '../UI/Container';
import { GiBackpack } from 'react-icons/gi';

function InventoryEquipment({ equipment, sellMode }) {
  const dispatch = useDispatch();

  const itemSoldHandler = (item) => {
    dispatch(itemSold(item));
  };

  const itemEquippedHandler = (item) => {
    if (currentEquipment[item.equipmentSlot]) return;

    dispatch(equipItem(item));
  };

  return (
    <Container title="Inventory" variant="red" icon={GiBackpack}>
      {equipment.map((item) => (
        <Item
          key={item._id}
          item={item}
          equipable={true}
          onItemClicked={
            sellMode
              ? () => itemSoldHandler(item)
              : () => itemEquippedHandler(item)
          }
        />
      ))}
    </Container>
  );
}

export default InventoryEquipment;
