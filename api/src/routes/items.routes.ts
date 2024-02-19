import { Request, Response, Router, response } from 'express';
import { checkOwnership } from '../middlewares/checkOwnership';
import { sellItem } from '../controllers/items.controller';
import Equipment from '../models/Equipment';
import { generateRandomEquipment } from '../logic/generators/equipment';

declare module 'express-serve-static-core' {
  export interface Request {
    item: InstanceType<typeof Equipment>;
  }
}

const router = Router();

router.get('/generate', (request, response) => {
  const newItem = generateRandomEquipment();

  response.json(newItem);
});

router.post('/:itemID/sell', checkOwnership, sellItem);

export default router;
