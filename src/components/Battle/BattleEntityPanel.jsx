import React from 'react';
import ResourceBar from '../UI/ResourceBar';

function BattleEntityPanel({ entity }) {
  return (
    <div>
      <div>{entity.name}</div>
      <ResourceBar
        currentResource={entity.currentHealth}
        maxResource={entity.maxHealth}
      />
    </div>
  );
}

export default BattleEntityPanel;
