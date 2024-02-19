import { RequestHandler, Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import shopRouter from './shop.routes';
import usersRouter from './users.routes';
import explorationRouter from './exploration.routes';
import storiesRouter from './stories.routes';
import itemsRouter from './items.routes';
import { getUserData } from '../middlewares/getUserData';
import { generateRandomEquipment } from '../logic/generators/equipment';
import User from '../models/User';
import Inventory from '../models/Inventory';

declare module 'express-serve-static-core' {
  export interface Request {
    user: InstanceType<typeof User>;
  }
}
const router = Router();
router.use(verifyToken);
router.use(getUserData as RequestHandler);
router.use('/users', usersRouter);
router.use('/exploration', explorationRouter);
router.use('/shop', shopRouter);
router.use('/stories', storiesRouter);
router.use('/items', itemsRouter);

export default router;