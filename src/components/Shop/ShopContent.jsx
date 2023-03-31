import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../UI/Item';
import { buyItem } from '../../store/shop-slice';

function ShopContent() {
  const dispatch = useDispatch();

  const itemBoughtHandler = (item, price) => {
    dispatch(buyItem(item, price));
  };

  const { items } = useSelector((state) => state.shop);

  console.log(items)
  const shopElements = items.map((shopElement) => (
    <Item
      key={shopElement.item.id}
      id={shopElement.item.id}
      item={shopElement.item}
      price={shopElement.price}
      onItemClicked={itemBoughtHandler}
    />
  ));

  return <div>{shopElements}</div>;
}

export default ShopContent;
