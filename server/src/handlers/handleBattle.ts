import { calculateHit, getHealth } from '../logic/resources/formulas';
import { monsters } from '../logic/resources/monsters';

export const handleBattle = () => {
  const log: string[] = [];
  const monster = {
    ...monsters[0],
  };
  let winner;

  const player = {
    damage: 8,
    armor: 3,
    strength: 4,
    vitality: 2,
  };

  console.log(monster);

  let playerHealth = getHealth(player.vitality);
  let monsterHealth = getHealth(monster.vitality);

  console.log(
    `Player health ${playerHealth}`,
    `Monster health ${monsterHealth}`
  );

  while (playerHealth > 0 || monsterHealth > 0) {
    const playerHit = calculateHit(
      player.damage,
      player.strength,
      monster.armor
    );
    log.push(`Player hits monster for ${playerHit}`);

    monsterHealth -= playerHit;

    if (monsterHealth <= 0) {
      winner = 'player';
    }

    const monsterHit = calculateHit(
      monster.damage,
      monster.strength,
      player.armor
    );

    console.log(monsterHit);

    playerHealth -= monsterHit;

    if (playerHealth <= 0) {
      winner = 'monster';
    }

    log.push(`Monster hits player for ${monsterHit}`);
  }

  console.log(log);
  return winner;
};

console.log(handleBattle());
