import equipmentSlotTypes from '../resources/equipmentSlotTypes';
import { generateMetaData } from './metaBuilder';
import { randomElementFromArray } from '../../utils/random';
import { Types } from 'mongoose';
import { Equipment, EquipmentPregenerate } from '../../types';

export const generateRandomEquipment = (
  ownerId?: Types.ObjectId
): Equipment => {
  const base: EquipmentPregenerate = JSON.parse(
    JSON.stringify(randomElementFromArray(equipmentSlotTypes))
  );

  const finalItem = { ...generateMetaData(base) };

  return {
    ...finalItem,
    owner: ownerId || null,
    type: 'equipment',
  };
};
