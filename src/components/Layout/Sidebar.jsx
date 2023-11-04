import React from 'react';
import ResourceBar from '../UI/ResourceBar';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import goldIcon from '@/Logic/Resources/Icons/gold.png';

function Sidebar() {
  const player = useSelector((state) => state.status);
  const { currentHealth, maxHealth } = useSelector((state) => state.statistics);

  return (
    <div className='p-4 flex flex-col gap-1 font-medium bg-gray-950 text-white border-r'>
      <div style={{ fontSize: '2rem' }}>Level: {player.level}</div>
      <ResourceBar
        bgColor='bg-yellow-600'
        label='Experience'
        currentResource={player.experience}
        maxResource={player.maxExperience}
      />
      <ResourceBar
        bgColor='bg-red-800'
        label='Health'
        currentResource={currentHealth}
        maxResource={maxHealth}
      />
      <div>
        <img src={goldIcon} style={{ width: '30px' }} alt='' /> {player.gold}
      </div>

      <Navigation />
    </div>
  );
}

export default Sidebar;
