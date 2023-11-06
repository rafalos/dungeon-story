import { generateRandomEquipment } from '../logic/generators/equipment';
import Shop from '../models/Shop';

export const shopRestock = async () => {
  const tempArray = [...Array(5).keys()];
  const items = tempArray.map((_) => generateRandomEquipment());
  const lastRefreshed = new Date();

  const update = {
    items,
    lastRefreshed,
  };

  await Shop.findOneAndUpdate({}, update);

  console.log(`Restocked shop with new items ${lastRefreshed}`);
};
