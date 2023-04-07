import React from 'react';
import { useSelector } from 'react-redux';

function ShopTime() {
  const shopTimer = useSelector((state) => state.timers.shop);

  function parseTime() {
    const date = new Date(null);
    date.setSeconds(shopTimer);
    return date.toISOString().slice(14, 19);
  }

  return <h2>Time to restock shop with new items: {parseTime()}</h2>;
}

export default ShopTime;
