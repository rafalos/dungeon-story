import React from 'react';
import Card from '../components/UI/Card';
import ShopTime from '../components/Shop/ShopTime';
import ShopContent from '../components/Shop/ShopContent';

function ShopPage() {
  return (
    <Card>
      <ShopTime />
      <ShopContent />
    </Card>
  );
}

export default ShopPage;
