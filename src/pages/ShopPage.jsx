import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/UI/Card';

function ShopPage() {
  const shop = useSelector((state) => state.shop);

  return <Card>
    Time to refresh {shop.timeToRefresh}
  </Card>;
}

export default ShopPage;
