import { Request, Response, Router } from 'express';
import { checkOwnership } from '../middlewares/checkOwnership';
import { sellItem } from '../controllers/items.controller';
import Equipment from '../models/Equipment';

declare module 'express-serve-static-core' {
  export interface Request {
    item: InstanceType<typeof Equipment>;
  }
}

const router = Router();

router.post('/:itemID/sell', checkOwnership, sellItem);

export default router;
