import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../UI/Item';

function ShopContent() {
  const itemBoughtHandler = (item) => {
    console.log(item);
  };

  const { items } = useSelector((state) => state.shop);
  const shopElements = items.map((shopElement) => (
    <Item
      item={shopElement.item}
      price={shopElement.price}
      onItemClicked={itemBoughtHandler}
    />
  ));

  console.log(items);
  return <div>{shopElements}</div>;
}

export default ShopContent;
