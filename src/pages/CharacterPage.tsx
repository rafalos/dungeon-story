import Inventory from '@/components/Character';
import Equipment from '@/components/Equipment';
import Container from '@/components/UI/Container';
import { GiBlackKnightHelm } from 'react-icons/gi';

function CharacterPage() {
  return (
    <Container title="Character" icon={GiBlackKnightHelm}>
      <Equipment />
      <Inventory />
    </Container>
  );
}

export default CharacterPage;
