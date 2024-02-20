import { generateRandomEquipment } from '../logic/generators/equipment';
import Equipment from '../models/Equipment';
import Shop from '../models/Shop';
import { deleteUnownedItems } from './deleteUnownedItems';

export const shopRestock = async () => {
  await deleteUnownedItems();

  const tempArray = [...Array(5).keys()];
  const items = tempArray.map((_) => new Equipment(generateRandomEquipment()));

  const itemIDs = items.map((item) => item._id);
  const lastRefreshed = new Date();

  const update = {
    items: itemIDs,
    lastRefreshed,
  };

  await Equipment.insertMany(items);

  await Shop.findOneAndUpdate({}, update);

  console.log(`Restocked shop with new items ${lastRefreshed}`);
};
