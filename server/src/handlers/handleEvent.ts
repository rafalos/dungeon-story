import { HydratedDocument } from 'mongoose';
import { IExploration } from '../models/Exploration';
import User from '../models/User';

const handleTrap = (maxHealth: number) => {
  return {
    currentHealth: (maxHealth / 100) * 10,
  };
};
const handleBattle = () => {};
const handleTreasure = () => {};
const handleWell = (maxHealth: number, maxExperience: number) => {
  return {
    currentHealth: maxHealth,
    currentExperience: maxExperience - 1,
  };
};

export const handleEvent = async (
  user: InstanceType<typeof User>,
  exploration: HydratedDocument<IExploration>
) => {
  const { seed, currentStage } = exploration;

  switch (seed[currentStage]) {
    case 'battle':
      handleBattle();
      break;
    case 'trap': {
      const { currentHealth } = handleTrap(exploration.maxHealth);

      exploration.currentHealth -= currentHealth;
      break;
    }
    case 'treasure':
      handleTreasure();
      break;
    case 'well':
      {
        const { currentExperience, currentHealth } = handleWell(
          exploration.maxHealth,
          user.maxExperience
        );

        user.experience = currentExperience;
        exploration.currentHealth = currentHealth;
      }

      break;
  }

  await Promise.all([exploration.save(), user.save()]);
  console.log(exploration);
};
