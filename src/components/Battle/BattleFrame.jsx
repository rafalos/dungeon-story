import React from 'react';
import initialEnemy from '../../Logic/Enemy/Enemy';
import classes from './Battle.module.css';
import BattleEntityPanel from './BattleEntityPanel';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { playerStatusActions } from '../../store';
import { randomInRange } from '../../utils/random';
import BattleSummary from './BattleSummary';

function BattleFrame({ onLeaveBattle }) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const [enemy, setEnemy] = useState(initialEnemy);
  const [enemyTurn, setEnemyTurn] = useState(false);
  const [battleID, setBattleID] = useState(null);
  const [battleOver, setBattleOver] = useState(false);
  const [battleSummary, setBattleSummary] = useState({
    experienceGained: null,
    itemsFound: [],
  });

  useEffect(() => {
    setBattleID(uuidv4());
    return () => {
      setBattleID(null);
    };
  }, []);

  useEffect(() => {
    if (player.currentHealth <= 0 || enemy.currentHealth <= 0) {
      const experienceGained = randomInRange(
        enemy.experience.min,
        enemy.experience.max
      );
      setBattleOver(true);
      setBattleSummary({
        experienceGained: experienceGained,
        itemsFound: [],
      });
      dispatch(
        playerStatusActions.addExperience({
          experience: experienceGained,
        })
      );
    }
  }, [player.currentHealth, enemy.currentHealth]);

  const handleAttack = () => {
    const updatedEnemy = { ...enemy, currentHealth: enemy.currentHealth - 10 };

    setEnemy(updatedEnemy);
    setEnemyTurn((enemyTurn) => !enemyTurn);

    setTimeout(() => {
      dispatch(
        playerStatusActions.takeDamage({
          amount: 80,
        })
      );
      setEnemyTurn((enemyTurn) => !enemyTurn);
    }, 1000);
  };

  return (
    <div key={battleID}>
      {battleOver ? (
        <BattleSummary
          onLeaveBattle={onLeaveBattle}
          battleSummary={battleSummary}
        />
      ) : (
        <div className={classes['battle-wrapper']}>
          {battleID}
          <div>
            <BattleEntityPanel entity={player} />
            <button onClick={handleAttack} disabled={enemyTurn}>
              Attack
            </button>
          </div>
          <div>
            <BattleEntityPanel entity={enemy} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BattleFrame;
