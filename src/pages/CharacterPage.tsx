import Card from '../components/UI/Card';
import Inventory from '@/components/Character';
import Equipment from '@/components/Equipment';

function CharacterPage() {
  return (
    <Card>
      <div className="flex w-full justify-around gap-4">
        <Inventory />
        <Equipment />
      </div>
    </Card>
  );
}

export default CharacterPage;
