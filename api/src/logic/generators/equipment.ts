import equipmentSlotTypes from '../resources/equipmentSlotTypes';
import { generateMetaData } from './metaBuilder';
import { randomElementFromArray } from '../../utils/random';
import { IEquipment } from '../../models/Equipment';

export const generateRandomEquipment = (): IEquipment => {
  const base = JSON.parse(
    JSON.stringify(randomElementFromArray(equipmentSlotTypes))
  );

  const finalItem = { ...generateMetaData(base) };

  return {
    ...finalItem,
    type: 'equipment',
    sellPrice: 10,
  };
};
