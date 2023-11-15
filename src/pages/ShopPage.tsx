import React from 'react';
import Card from '../components/UI/Card';
import ShopTime from '../components/Shop/ShopTime';
import ShopContent from '../components/Shop/ShopContent';
import Inventory from '../components/Character/Inventory';
import { useQuery } from 'react-query';
import { getCurrentShop } from '@/services/shop';
import Loader from '@/components/UI/Loader';

function ShopPage() {
  const { isLoading, data } = useQuery('shop', getCurrentShop);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <ShopTime />
            <ShopContent items={data?.data.items} />
          </div>
          <div>
            <Inventory sellMode={true} />
          </div>
        </Card>
      )}
    </>
  );
}

export default ShopPage;
