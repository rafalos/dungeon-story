import React from 'react';
import ResourceBar from '../UI/ResourceBar';
import { useSelector } from 'react-redux';
import Equipment from '../Equipment/Equipment';
import Statistics from '../Statistics/Statistics';
import Card from '../UI/Card';
import Navigation from './Navigation';
import goldIcon from '../../Logic/Resources/Icons/gold.png'

function Sidebar() {
  const player = useSelector((state) => state.status);

  return (
    <header>
      <Card>
        <img src={player.icon} style={{ width: '140px' }} alt='' />
        <div style={{ fontSize: '2rem' }}>Level: {player.level}</div>
        <ResourceBar
          currentResource={player.experience}
          maxResource={player.maxExperience}
        />
        <div>
          <img src={goldIcon} style={{ width: '30px' }} alt='' />{' '}
          {player.gold}
        </div>
      </Card>
      <Navigation />
    </header>
  );
}

export default Sidebar;
