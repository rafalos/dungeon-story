import Card from '../components/UI/Card';
import { useOutletContext } from 'react-router-dom';
import Statistics from '@/components/Statistics/Statistics';
import Inventory from '@/components/Character/Inventory';
import Equipment from '@/components/Equipment/Equipment';

function CharacterPage() {
  const { user } = useOutletContext();

  return (
    <Card>
      <div className='flex justify-around w-full gap-4'>
        <Inventory items={user.inventory.equipment} />
        <Equipment />
        <Statistics />
      </div>
    </Card>
  );
}

export default CharacterPage;
