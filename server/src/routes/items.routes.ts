import { Request, Response, Router } from 'express';
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
import { ObjectId } from 'mongodb';

const router = Router();

const generateItems = async (request: Request, response: Response) => {
  const inventory = await Inventory.findOne({
    user: '69b2d3d67f615637b3025d26',
  });

  if (!inventory) throw new Error('test');

  const equipment = [1, 2, 3, 4, 5].map(
    () =>
      new Equipment(
        generateRandomEquipment(new ObjectId('69b2d3d67f615637b3025d26'))
      )
  );

  await Equipment.insertMany(equipment);

  inventory.equipment = equipment.map(({ _id }) => _id);

  await inventory.save()

  response.send('done');
};

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
router.post('/generate', generateItems);

export default router;
