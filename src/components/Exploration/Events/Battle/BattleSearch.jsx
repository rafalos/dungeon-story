import Button from '@/components/UI/Button';
import React from 'react';

function BattleSearch({ onEnterBattle }) {
  return (
    <div>
      <Button onClick={onEnterBattle}>Search for battle</Button>
    </div>
  );
}

export default BattleSearch;
