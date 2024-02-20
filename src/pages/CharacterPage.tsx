import Card from '../components/UI/Card';
import Statistics from '@/components/Statistics/Statistics';
import Inventory from '@/components/Character';
import Equipment from '@/components/Equipment/Equipment';

function CharacterPage() {
  return (
    <Card>
      <div className="flex w-full justify-around gap-4">
        <Inventory />
        <Equipment />
        <Statistics />
      </div>
    </Card>
  );
}

export default CharacterPage;
