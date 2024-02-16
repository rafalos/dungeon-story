import express, { RequestHandler } from 'express';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import shopRouter from './routes/shop.routes';
import usersRouter from './routes/users.routes';
import explorationRouter from './routes/exploration.routes';
import storiesRouter from './routes/stories.routes';
import { get404 } from './controllers/error.controller';
import { errorHandler } from './middlewares/error';
import { auth } from 'express-oauth2-jwt-bearer';
import { getUserData } from './middlewares/getUserData';
import { deleteUnownedItems } from './handlers/deleteUnownedItems';
import openAi from './lib/openAiApi';

export const app = express();

const verifyToken = auth({
  audience: process.env.AUTH_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUE_URL,
  tokenSigningAlg: 'RS256',
});

app.use(cors<Request>());
app.get('/api/test', async (req, res) => {
  const response = await openAi.images.generate({
    prompt: 'give me image for dark fantasy Haunted Forest',
    size: '512x512',
  });

  console.log(response);
});
app.use(verifyToken);
app.use(getUserData as RequestHandler);

app.get('/api/item', async (_, response) => {
  await deleteUnownedItems();
});

app.use('/api/users', usersRouter);
app.use('/api/exploration', explorationRouter);
app.use('/api/shop', shopRouter);
app.use('/api/stories', storiesRouter);

app.use(get404);
app.use(errorHandler);
