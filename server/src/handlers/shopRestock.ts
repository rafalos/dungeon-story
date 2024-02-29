import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { app } from '../app';
import { generateRandomEquipment } from '../logic/generators/equipment';
import Equipment from '../models/Equipment';
import Shop from '../models/Shop';
import { deleteUnownedItems } from './deleteUnownedItems';

export const shopRestock = async () => {
  const io: Server<
    DefaultEventsMap,
    DefaultEventsMap,
    DefaultEventsMap,
    unknown
  > = app.get('io');

  await deleteUnownedItems();

  const tempArray = [...Array(5).keys()];
  const items = tempArray.map((_) => new Equipment(generateRandomEquipment()));

  const itemIDs = items.map((item) => item._id);
  const lastRefreshed = new Date();

  const update = {
    items: itemIDs,
  };

  const newItems = await Equipment.insertMany(items);

  await Shop.findOneAndUpdate({}, update);

  io.emit('shopRestored', newItems);

  console.log(`Restocked shop with new items ${lastRefreshed}`);
};
