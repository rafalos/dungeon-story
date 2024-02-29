import ShopContent from '../components/Shop/ShopContent';
import Inventory from '../components/Character';
import Container from '@/components/UI/Container';
import { useAppSelector } from '@/store';

function ShopPage() {
  const { items } = useAppSelector((state) => state.shop);

  return (
    <Container title="Merchant">
      <div className="flex flex-col justify-center lg:flex-row">
        <Inventory sellMode={true} />

        <ShopContent items={items} />
      </div>

      {/* <ShopTime /> */}
    </Container>
  );
}

export default ShopPage;
