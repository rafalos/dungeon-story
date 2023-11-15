import equipmentSlotTypes from '../resources/equipmentSlotTypes';
import { generateMetaData } from './metaBuilder';
import { randomElementFromArray } from '../../utils/random';
import { IEquipment } from '../../models/Equipment';
import { Types } from 'mongoose';

export const generateRandomEquipment = (
  ownerId?: Types.ObjectId
): IEquipment => {
  const base = JSON.parse(
    JSON.stringify(randomElementFromArray(equipmentSlotTypes))
  );

  const finalItem = { ...generateMetaData(base) };

  return {
    ...finalItem,
    owner: ownerId || null,
    type: 'equipment',
    sellPrice: 10,
  };
};
