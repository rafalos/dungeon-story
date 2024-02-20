import React from 'react';
import { useDispatch } from 'react-redux';
import Item from '../UI/Item';
import classes from './Equipment.module.css';
import { unequipItem } from '../../store/player-equipment-slice';
import Container from '../UI/Container';
import { GiShardSword } from 'react-icons/gi';
import { useAppSelector } from '@/store';

function Equipment() {
  const wornItems = useAppSelector((state) => state.inventory.worn);
  const dispatch = useDispatch();


  const itemClickHandler = (item) => {
    dispatch(unequipItem(item));
  };

  return (
    <Container title="Equipment" variant="yellow" icon={GiShardSword}>
      <div className={classes['equipment-container']}>
        {wornItems.map((element) => (
          <Item item={element}/>
        ))}
      </div>
    </Container>
  );
}

export default Equipment;
