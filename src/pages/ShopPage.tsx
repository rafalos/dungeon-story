import React from 'react';
import Card from '../components/UI/Card';
import ShopTime from '../components/Shop/ShopTime';
import ShopContent from '../components/Shop/ShopContent';
import Inventory from '../components/Character/Inventory';
import { useQuery } from '@tanstack/react-query';
import { getCurrentShop } from '@/services/shop';
import Loader from '@/components/UI/Loader';
import { useOutletContext } from 'react-router-dom';
import Container from '@/components/UI/Container';
import { GiShop } from 'react-icons/gi';

function ShopPage() {
  const { user } = useOutletContext();
  const { isLoading, data } = useQuery({
    queryKey: ['shop'],
    queryFn: getCurrentShop,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card>
          <Container title="Merchant" variant="brown" icon={GiShop}>
            <ShopContent items={data?.data.items} />
            {/* <ShopTime /> */}
          </Container>
          <Inventory items={user.inventory.equipment} sellMode={true} />
        </Card>
      )}
    </>
  );
}

export default ShopPage;
