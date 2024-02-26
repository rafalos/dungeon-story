import ShopContent from '../components/Shop/ShopContent';
import Inventory from '../components/Character';
import { useQuery } from '@tanstack/react-query';
import { getCurrentShop } from '@/services/shop';
import Loader from '@/components/UI/Loader';
import Container from '@/components/UI/Container';
import SmallLoader from '@/components/UI/SmallLoader';

function ShopPage() {
  const { isLoading, data } = useQuery({
    queryKey: ['shop'],
    queryFn: getCurrentShop,
  });

  if (isLoading) {
    return <SmallLoader />;
  }

  return (
    <Container title="Merchant">
      <div className="flex flex-col justify-center lg:flex-row">
        {isLoading ? <Loader /> : <Inventory sellMode={true} />}

        <ShopContent items={data.data.items} />
      </div>

      {/* <ShopTime /> */}
    </Container>
  );
}

export default ShopPage;
