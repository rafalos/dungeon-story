import React from 'react';
import ResourceBar from '../UI/ResourceBar';
import { useSelector } from 'react-redux';

function Header() {
  const player = useSelector((state) => state.player);

  return (
    <header>
      <div>
        <div style={{fontSize: "2rem"}}>{player.name}</div>
        <div style={{fontSize: "2rem"}}>Level: {player.level}</div>
        <ResourceBar currentResource={player.experience} maxResource={player.maxExperience} />
      </div>
    </header>
  );
}

export default Header;
