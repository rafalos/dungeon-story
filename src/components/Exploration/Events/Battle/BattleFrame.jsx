import React from 'react';
import { getRandomEnemy } from '../../../../Logic/Enemy/Enemy';
import classes from './BattleFrame.module.css';
import BattleEntityPanel from './BattleEntityPanel';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { playerStatisticActions } from '../../../../store/player-statistics-slice.js';
import { playerStatusActions } from '../../../../store/player-status-slice.js';
import { randomInRange } from '../../../../utils/random';
import BattleSummary from './BattleSummary';
import { LOOT_BRACKERS } from '../../../../Logic/Resources/tables/lootTable';
import { getBasicDamage } from '../../../../utils/formulas';
import Consumables from '../../../Character/Consumables';
import BattleActions from './BattleActions';
import { generateLoot } from '../../../../Logic/Generator/loot';

function BattleFrame({
  onLeaveBattle,
  onItemFound,
  onExperienceGained,
  onPlayerDeath,
}) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.statistics);
  const inventory = useSelector((state) => state.inventory);
  const [enemyTurn, setEnemyTurn] = useState(false);
  const [enemy, setEnemy] = useState(getRandomEnemy());
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
    if (player.currentHealth <= 0) {
      onPlayerDeath();
      return;
    }
    if (enemy.currentHealth <= 0) {
      const experienceGained = randomInRange(
        enemy.experience.min,
        enemy.experience.max
      );
      const foundItems = generateLoot(LOOT_BRACKERS.MONSTER);
      const itemsFound = [...foundItems];
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
      onExperienceGained(experienceGained);
      onItemFound(itemsFound);
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
    setBattleLog((log) => [
      ...log,
      { id: uuidv4(), entry: `Player hit for ${damageAmount}` },
    ]);
    setEnemyTurn((enemyTurn) => !enemyTurn);

    const enemyDamageAmount = randomInRange(enemy.damage.min, enemy.damage.max);
    dispatch(
      playerStatisticActions.takeDamage({
        amount: enemyDamageAmount,
      })
    );
    setBattleLog((log) => [
      ...log,
      { id: uuidv4(), entry: `Enemy hit for ${enemyDamageAmount}` },
    ]);
    setEnemyTurn((enemyTurn) => !enemyTurn);
  };

  return (
    <>
      <div key={battleID}>
        {battleOver ? (
          <BattleSummary
            onLeaveBattle={onLeaveBattle}
            battleSummary={battleSummary}
          />
        ) : (
          <div className={classes['battle-wrapper']}>
            <div className={classes['entities-wrapper']}>
              {/* <div>
                <BattleLog log={battleLog} />
              </div> */}
              <div className={classes.enemy}>
                <BattleEntityPanel entity={enemy} />
              </div>
            </div>
            <BattleActions onBasicAttack={handleAttack} />
            <Consumables inventoryItems={inventory.items} />
          </div>
        )}
      </div>
    </>
  );
}

export default BattleFrame;
