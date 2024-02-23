import { useAppSelector } from '@/store';

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
      <div className="flex divide-x divide-customBlack">
        <Button onClick={() => handleChangeTab('worn')} variant={'tab'}>
          Worn items
        </Button>
        <Button onClick={() => handleChangeTab('statistics')} variant={'tab'}>
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
