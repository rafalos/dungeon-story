import { useAppSelector } from '@/store';

import Worn from './Worn';
import Statistics from './Statistics';
import { useUserStatistics } from '@/store/user-slice';
import Card from '../UI/Card';
import { useState } from 'react';
import Button from '../UI/Button';
import Tabbed from '../UI/Tabbed';

function Equipment() {
  const wornItems = useAppSelector((state) => state.inventory.worn);
  const stats = useUserStatistics();

  return (
    <Card title="Equipment">
      <div className="flex divide-x divide-customBlack">
        <Tabbed
          elements={[
            {
              component: <Worn wornItems={wornItems} />,
              title: 'Worn',
            },
            {
              component: <Statistics {...stats} />,
              title: 'Statistics',
            },
          ]}
        />
      </div>
    </Card>
  );
}

export default Equipment;
