import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store';
import type { Equipment as EquipmentType } from '@/types';
import { unwearItem } from '@/services/inventory';
import { unequippedItem } from '@/store/player-inventory-slice';
import Worn from './Worn';
import Statistics from './Statistics';
import { useUserStatistics } from '@/store/user-slice';
import Card from '../UI/Card';
import { useState } from 'react';
import Button from '../UI/Button';

function Equipment() {
  const wornItems = useAppSelector((state) => state.inventory.worn);
  const stats = useUserStatistics();
  const [active, setActive] = useState('equipment');

  const handleChangeTab = (tab: string) => {
    setActive(tab);
  };

  return (
    <Card title="Equipment">
      <div className="flex gap-2">
        <Button onClick={() => handleChangeTab('worn')}>Worn items</Button>
        <Button onClick={() => handleChangeTab('statistics')}>
          Statistics
        </Button>
      </div>
      {active === 'worn' ? (
        <Worn wornItems={wornItems} />
      ) : (
        <Statistics {...stats} />
      )}
    </Card>
  );
}

export default Equipment;
