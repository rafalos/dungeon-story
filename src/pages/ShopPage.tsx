import Card from '../components/UI/Card';
import ShopContent from '../components/Shop/ShopContent';
import Inventory from '../components/Character';
import { useQuery } from '@tanstack/react-query';
import { getCurrentShop } from '@/services/shop';
import Loader from '@/components/UI/Loader';
import Container from '@/components/UI/Container';
import { GiShop } from 'react-icons/gi';

function ShopPage() {
  const { isLoading, data } = useQuery({
    queryKey: ['shop'],
    queryFn: getCurrentShop,
  });

  if (!isLoading && !data) {
    return <h1>failed to fetch shop</h1>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card>
          <Container title="Merchant" icon={GiShop}>
            <ShopContent items={data.data.items} />
            {/* <ShopTime /> */}
          </Container>
          <Inventory sellMode={true} />
        </Card>
      )}
    </>
  );
}

export default ShopPage;
