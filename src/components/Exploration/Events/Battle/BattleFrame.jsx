import React from 'react';
import initialEnemy from '../../../../Logic/Enemy/Enemy';
import classes from './BattleFrame.module.css';
import BattleEntityPanel from './BattleEntityPanel';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { playerStatisticActions } from '../../../../store/player-statistics-slice.js';
import { playerStatusActions } from '../../../../store/player-status-slice.js';
import { randomInRange } from '../../../../utils/random';
import BattleSummary from './BattleSummary';
import { generateNewEquipmentItem } from '../../../../Logic/Generator/Equipment';
import { playerInventoryActions } from '../../../../store/player-inventory-slice';
import { getBasicDamage } from '../../../../utils/formulas';
import BattleLog from './BattleLog';

function BattleFrame({ onLeaveBattle }) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.statistics);
  const [enemy, setEnemy] = useState(initialEnemy);
  const [enemyTurn, setEnemyTurn] = useState(false);
  const [battleID, setBattleID] = useState(null);
  const [battleOver, setBattleOver] = useState(false);
  const [battleLog, setBattleLog] = useState([]);
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
      const foundItem = generateNewEquipmentItem();
      const itemsFound = [{ ...foundItem }];
      setBattleOver(true);
      setBattleSummary({
        experienceGained,
        itemsFound,
      });
      dispatch(
        playerStatusActions.addExperience({
          experience: experienceGained,
        })
      );
      dispatch(
        playerInventoryActions.addMultipleItems({
          items: itemsFound,
        })
      );
    }
  }, [player.currentHealth, enemy.currentHealth]);

  const handleAttack = () => {
    const damageAmount = getBasicDamage(
      player.minDamage,
      player.maxDamage,
      enemy.defense
    );

    const updatedEnemy = {
      ...enemy,
      currentHealth: enemy.currentHealth - damageAmount,
    };

    setEnemy(updatedEnemy);
    setBattleLog((log) => [...log, `Player hit for ${damageAmount}`]);
    setEnemyTurn((enemyTurn) => !enemyTurn);

    const enemyDamageAmount = randomInRange(enemy.damage.min, enemy.damage.max);
    dispatch(
      playerStatisticActions.takeDamage({
        amount: enemyDamageAmount,
      })
    );
    setBattleLog((log) => [...log, `Enemy hit for ${enemyDamageAmount}`]);
    setEnemyTurn((enemyTurn) => !enemyTurn);
  };

  return (
    <div>
      <div key={battleID}>
        {battleOver ? (
          <BattleSummary
            onLeaveBattle={onLeaveBattle}
            battleSummary={battleSummary}
          />
        ) : (
          <div className={classes['battle-wrapper']}>
            <div className={classes.player}>
              <BattleEntityPanel entity={player} />
              <button onClick={handleAttack} disabled={enemyTurn}>
                Attack
              </button>
            </div>
            <div className={classes.enemy}>
              <BattleEntityPanel entity={enemy} />
            </div>
          </div>
        )}
      </div>
      <div>
        <BattleLog log={battleLog} />
      </div>
    </div>
  );
}

export default BattleFrame;
