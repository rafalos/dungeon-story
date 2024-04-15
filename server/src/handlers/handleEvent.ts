import { HydratedDocument, Types } from 'mongoose';
import { IExploration } from '../models/Exploration';
import User from '../models/User';
import { randomInRange } from '../utils/random';
import { generateRandomEquipment } from '../logic/generators/equipment';
import Equipment from '../models/Equipment';
import { Equipment as EquipmentType } from '../types';
import Inventory from '../models/Inventory';
import { handleBattle } from './handleBattle';
import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { app } from '../app';

const handleTrap = (maxHealth: number) => {
  return {
    hpLoss: -(maxHealth / 100) * 10,
  };
};

const handleTreasure = async (userID: Types.ObjectId) => {
  const rolls = randomInRange(1, 3);

  const equipment = Array.from(Array(rolls)).map(
    () => new Equipment(generateRandomEquipment(userID))
  );

  await Equipment.insertMany(equipment);

  return {
    itemGain: equipment,
  };
};
const handleWell = (
  maxExperience: number,
  currentHealth: number,
  maxHealth: number
) => {
  const newHealth = maxHealth;
  const hpGain = newHealth - currentHealth;

  return {
    expGain: 25,
    hpGain,
  };
};

export const handleEvent = async (
  user: InstanceType<typeof User>,
  exploration: HydratedDocument<IExploration>
) => {
  const { seed, currentStage } = exploration;
  let experienceGained = 0;
  let healthDiff = 0;
  const itemsFound: HydratedDocument<EquipmentType>[] = [];
  const io: Server<
    DefaultEventsMap,
    DefaultEventsMap,
    DefaultEventsMap,
    unknown
  > = app.get('io');

  switch (seed[currentStage]) {
    case 'battle':
      handleBattle();
      break;
    case 'trap': {
      const { hpLoss } = handleTrap(exploration.maxHealth);

      healthDiff += hpLoss;
      break;
    }
    case 'treasure': {
      const { itemGain } = await handleTreasure(user._id);
      const itemIDs = itemGain.map((item) => item._id);

      const inventory = await Inventory.findOne({
        user: user._id,
      });

      if (!inventory) return;

      inventory.equipment.push(...itemIDs);
      itemsFound.push(...itemGain);

      await inventory.save();
      break;
    }
    case 'well':
      {
        const { expGain, hpGain } = handleWell(
          user.maxExperience,
          exploration.currentHealth,
          exploration.maxHealth
        );

        healthDiff = hpGain;
        experienceGained = expGain;
      }
      break;
  }

  if (exploration.currentHealth <= 0) {
    exploration.currentStage = 666;
  }

  exploration.currentHealth += healthDiff;
  user.experience += experienceGained;

  if (user.experience >= user.maxExperience) {
    user.level += 1;
    user.experience = user.experience - user.maxExperience;
    io.emit('leveledUp');
  }

  await Promise.all([exploration.save(), user.save()]);

  return {
    healthDiff,
    itemsFound,
    experienceGained,
  };
};
