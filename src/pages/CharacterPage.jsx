import React from 'react';
import Character from '../components/Character/Character';
import Card from '../components/UI/Card';
import { useOutletContext } from 'react-router-dom';

function CharacterPage() {
  const { user } = useOutletContext()

  return (
    <Card>
      <Character character={user} />
    </Card>
  );
}

export default CharacterPage;
