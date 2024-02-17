import { RequestHandler, Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import shopRouter from './shop.routes';
import usersRouter from './users.routes';
import explorationRouter from './exploration.routes';
import storiesRouter from './stories.routes';
import { getUserData } from '../middlewares/getUserData';
import openAi from '../lib/openAiApi';

const router = Router();
router.use(verifyToken);
router.use(getUserData as RequestHandler);

router.get('/test', async (req, res) => {
  const response = await openAi.images.generate({
    prompt: 'give me image for dark fantasy Haunted Forest',
    size: '512x512',
  });

  console.log(response);
});

router.use('/users', usersRouter);
router.use('/exploration', explorationRouter);
router.use('/shop', shopRouter);
router.use('/stories', storiesRouter);

export default router;
