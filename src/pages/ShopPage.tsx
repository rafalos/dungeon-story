import ShopContent from '../components/Shop/ShopContent';
import Inventory from '../components/Character';
import Container from '@/components/UI/Container';
import { useAppSelector } from '@/store';

function ShopPage() {
  const { items, nextRefresh } = useAppSelector((state) => state.shop);

  return (
    <Container title="Merchant">
      <div className="flex flex-col justify-center lg:flex-row">
        <Inventory sellMode={true} />

        <ShopContent items={items} refreshTime={nextRefresh} />
      </div>
    </Container>
  );
}

export default ShopPage;
