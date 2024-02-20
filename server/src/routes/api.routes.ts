import { RequestHandler, Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import shopRouter from './shop.routes';
import usersRouter from './users.routes';
import explorationRouter from './exploration.routes';
import storiesRouter from './stories.routes';
import itemsRouter from './items.routes';
import inventoryRouter from './inventory.routes';
import { getUserData } from '../middlewares/getUserData';
import User from '../models/User';
import { app } from '../app';
import { notFound } from '../middlewares/404';
import { errorHandler } from '../middlewares/error';

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
router.use('/inventory', inventoryRouter);

router.use(notFound);
router.use(errorHandler);

export default router;
