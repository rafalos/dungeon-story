import { Router } from 'express';
import { checkOwnership } from '../middlewares/checkOwnership';
import {
  buyItem,
  sellItem,
  unwearItem,
  wearItem,
} from '../controllers/items.controller';
import Equipment from '../models/Equipment';
import { generateRandomEquipment } from '../logic/generators/equipment';
import { shopRestock } from '../handlers/shopRestock';
import Inventory from '../models/Inventory';
import { getItemData } from '../middlewares/getItemData';

declare module 'express-serve-static-core' {
  export interface Request {
    item: InstanceType<typeof Equipment>;
  }
}

const router = Router();

router.get('/generate', async (request, response) => {
  shopRestock();
  const newItem = new Equipment(generateRandomEquipment());

  const inv = await Inventory.findOne({
    user: request.user._id,
  });

  if (!inv) return;

  inv.equipment.push(newItem._id);
  newItem.owner = request.user._id;

  await Promise.all([newItem.save(), inv.save()]);
  response.json(newItem);
});

router.post('/:itemID/sell', checkOwnership, sellItem);
router.post('/:itemID/buy', buyItem);
router.post('/:itemID/wear', checkOwnership, wearItem);
router.post('/:itemID/unwear', getItemData, unwearItem);

export default router;
