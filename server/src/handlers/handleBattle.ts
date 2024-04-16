import { calculateHit, getHealth } from '../logic/resources/formulas';
import { monsters } from '../logic/resources/monsters';
import { Attributes } from '../types';
import { randomElementFromArray } from '../utils/random';

interface LogEvent {
  dealt: number;
  playerHealth: number;
  monsterHealth: number;
}

type Monster = (typeof monsters)[number] & {
  name: string;
};

export const handleBattle = async (
  playerDamage: number,
  playerArmor: number,
  playerHealth: number,
  playerAttributes: Attributes,
  location: string
) => {
  const startingHealth = playerHealth;
  const log: LogEvent[] = [];
  const monster: Monster = {
    ...randomElementFromArray(monsters),
  };
  let winner;
  let expGain = monster.experienceYield;

  let monsterHealth = getHealth(monster.vitality);

  while (playerHealth >= 0 && monsterHealth >= 0) {
    const playerHit = calculateHit(
      playerDamage,
      playerAttributes.strength,
      monster.armor
    );

    monsterHealth -= playerHit;

    log.push({
      dealt: playerHit,
      playerHealth,
      monsterHealth,
    });

    if (monsterHealth <= 0) {
      winner = 'player';
      break;
    }

    const monsterHit = calculateHit(
      monster.damage,
      monster.strength,
      playerArmor
    );

    playerHealth -= monsterHit;

    if (playerHealth <= 0) {
      winner = 'monster';
      expGain = 0;
    }

    log.push({
      dealt: monsterHit,
      playerHealth,
      monsterHealth,
    });
  }

  return {
    monsterName: monster.name,
    monsterSpritesheet: monster.spritesheet,
    hpLoss: -(startingHealth - playerHealth),
    winner,
    expGain,
    log,
  };
};
