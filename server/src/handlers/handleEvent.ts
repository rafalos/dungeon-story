import { HydratedDocument, Types } from 'mongoose';
import { IExploration } from '../models/Exploration';
import User from '../models/User';
import { randomInRange } from '../utils/random';
import { generateRandomEquipment } from '../logic/generators/equipment';
import Equipment from '../models/Equipment';
import { Equipment as EquipmentType } from '../types';
import Inventory from '../models/Inventory';

const handleTrap = (maxHealth: number) => {
  return {
    currentHealth: (maxHealth / 100) * 10,
  };
};
const handleBattle = () => {};
const handleTreasure = async (userID: Types.ObjectId) => {
  const rolls = randomInRange(1, 3);

  const equipment = Array.from(Array(rolls)).map(
    () => new Equipment(generateRandomEquipment(userID))
  );

  await Equipment.insertMany(equipment);

  return equipment;
};
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
  let experienceGained = 0;
  const itemsFound: HydratedDocument<EquipmentType>[] = [];
  let healthDiff = 0;

  const { seed, currentStage } = exploration;

  switch (seed[currentStage]) {
    case 'battle':
      handleBattle();
      break;
    case 'trap': {
      const { currentHealth } = handleTrap(exploration.maxHealth);

      exploration.currentHealth -= currentHealth;
      healthDiff = -currentHealth;
      break;
    }
    case 'treasure': {
      const foundEquipment = await handleTreasure(user._id);
      const itemIDs = foundEquipment.map((item) => item._id);

      const inventory = await Inventory.findOne({
        user: user._id,
      });

      if (!inventory) return;

      inventory.equipment.push(...itemIDs);
      itemsFound.push(...foundEquipment);

      await inventory.save();
      break;
    }
    case 'well':
      {
        const { currentExperience, currentHealth } = handleWell(
          exploration.maxHealth,
          user.maxExperience
        );

        user.experience = currentExperience;
        exploration.currentHealth = currentHealth;
        experienceGained = user.experience;
        healthDiff = exploration.currentHealth;
      }

      break;
  }

  if (exploration.currentHealth <= 0) {
    exploration.currentStage = 666;
  }

  await Promise.all([exploration.save(), user.save()]);

  return {
    itemsFound,
    experienceGained,
    healthDiff,
  };
};
