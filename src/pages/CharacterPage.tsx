import Inventory from '@/components/Character';
import Equipment from '@/components/Equipment';
import Container from '@/components/UI/Container';

function CharacterPage() {
  return (
    <Container title="Character">
      <div className="flex flex-col lg:flex-row">
        <Equipment />
        <Inventory />
      </div>
    </Container>
  );
}

export default CharacterPage;
