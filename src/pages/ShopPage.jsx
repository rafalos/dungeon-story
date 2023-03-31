import React from 'react';
import Card from '../components/UI/Card';
import ShopTime from '../components/Shop/ShopTime';
import ShopContent from '../components/Shop/ShopContent';
import Inventory from '../components/Character/Inventory';

function ShopPage() {
  return (
    <Card style={{display: 'flex', gap: '20px', justifyContent: 'space-around'}}>
      <div>
        <ShopTime />
        <ShopContent />
      </div>
      <div>
        <Inventory />
      </div>
    </Card>
  );
}

export default ShopPage;
