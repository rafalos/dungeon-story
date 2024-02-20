import Equipment from '../models/Equipment';

export const deleteUnownedItems = async () => {
  const result = await Equipment.deleteMany({
    owner: null,
  });

  console.log(`Removed ${result.deletedCount} items from the database`);
};
