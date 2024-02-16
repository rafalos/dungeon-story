import express, { RequestHandler } from 'express';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import shopRouter from './routes/shop.routes';
import usersRouter from './routes/users.routes';
import explorationRouter from './routes/exploration.routes';
import storiesRouter from './routes/stories.routes';
import { errorHandler } from './middlewares/error';
import { getUserData } from './middlewares/getUserData';
import openAi from './lib/openAiApi';
import { notFound } from './middlewares/404';
import { verifyToken } from './middlewares/verifyToken';
import path from 'path';

export const app = express();

app.use(cors<Request>());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', verifyToken);
app.get('/api/test', async (req, res) => {
  const response = await openAi.images.generate({
    prompt: 'give me image for dark fantasy Haunted Forest',
    size: '512x512',
  });

  console.log(response);
});

app.use('/api/users', getUserData as RequestHandler, usersRouter);
app.use('/api/exploration', getUserData as RequestHandler, explorationRouter);
app.use('/api/shop', getUserData as RequestHandler, shopRouter);
app.use('/api/stories', getUserData as RequestHandler, storiesRouter);

app.use(notFound);
app.use(errorHandler);
