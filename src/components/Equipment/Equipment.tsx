import React from 'react';
import { useDispatch } from 'react-redux';
import Item from '../UI/Item';
import classes from './Equipment.module.css';
import Container from '../UI/Container';
import { GiShardSword } from 'react-icons/gi';
import { useAppSelector } from '@/store';
import type { Equipment as EquipmentType } from '@/types';
import { unwearItem } from '@/services/inventory';
import { unequippedItem } from '@/store/player-inventory-slice';

function Equipment() {
  const wornItems = useAppSelector((state) => state.inventory.worn);
  const dispatch = useDispatch();

  const itemClickHandler = async (item: EquipmentType) => {
    try {
      await unwearItem(item.id);

      dispatch(unequippedItem(item));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container title="Equipment" icon={GiShardSword}>
      <div className={classes['equipment-container']}>
        {wornItems.map((element) => (
          <Item
            key={element.id}
            item={element}
            onItemClicked={itemClickHandler}
          />
        ))}
      </div>
    </Container>
  );
}

export default Equipment;
