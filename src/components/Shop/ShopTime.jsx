import React from 'react';
import { useSelector } from 'react-redux';

function ShopTime() {
  const shopTimer = useSelector((state) => state.timers.shop);
  return <h2>Time to refresh {shopTimer}</h2>;
}

export default ShopTime;
