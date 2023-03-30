import React from 'react';
import { useSelector } from 'react-redux';

function ShopTime() {
  const shopTimer = useSelector((state) => state.timers.shop);
  return <div>Time to refresh {shopTimer}</div>;
}

export default ShopTime;
