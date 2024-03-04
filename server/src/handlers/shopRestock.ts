import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { app } from '../app';
import { generateRandomEquipment } from '../logic/generators/equipment';
import Equipment from '../models/Equipment';
import Shop from '../models/Shop';
import { deleteUnownedItems } from './deleteUnownedItems';
import { refreshShopJob } from '../cron';

export const shopRestock = async () => {
  const io: Server<
    DefaultEventsMap,
    DefaultEventsMap,
    DefaultEventsMap,
    unknown
  > = app.get('io');

  await deleteUnownedItems();

  const tempArray = [...Array(5).keys()];
  const items = tempArray.map(() => new Equipment(generateRandomEquipment()));

  const itemIDs = items.map((item) => item._id);
  const lastRefreshed = new Date();
  const nextRun = refreshShopJob.nextDates(1)[0];

  const update = {
    items: itemIDs,
    nextRefresh: nextRun,
  };

  const newItems = await Equipment.insertMany(items);

  await Shop.findOneAndUpdate({}, update);

  console.log(`Restocked shop with new items ${lastRefreshed}`);

  io.emit('shopRestored', {
    items: newItems,
    nextRun,
  });
};
