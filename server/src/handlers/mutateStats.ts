import User from '../models/User';
import { Modifier, Operation } from '../types';

type BaseStat =
  | {
      damage: number;
    }
  | {
      armor: number;
    };

export const mutateStats = async (
  operation: Operation,
  user: InstanceType<typeof User>,
  base?: BaseStat,
  modifiers?: Modifier[]
) => {
  if (!base && !modifiers) return;

  if (base) {
    if ('damage' in base) {
      user.damage += operation === 'INC' ? base.damage : -base.damage;
    } else {
      user.armor += operation === 'INC' ? base.armor : -base.armor;
    }
  }

  if (modifiers) {
    modifiers.forEach((modifier) => {
      const [attribute, value] = modifier;

      user.attributes[attribute] += operation === 'INC' ? value : -value;
    });
  }

  await user.save();
};
