import React from 'react';
import { useSelector } from 'react-redux';
import Countdown from '../UI/Countdown';

type Props = {
  time: string;
};

function ShopTime({ time }: Props) {
  // function parseTime() {
  //   const date = new Date(null);
  //   date.setSeconds(shopTimer);
  //   return date.toISOString().slice(14, 19);
  // }

  return (
    <h2>
      Time to restock shop with new items: <Countdown till={time} />
    </h2>
  );
}

export default ShopTime;
