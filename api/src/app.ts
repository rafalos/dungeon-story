import express, { RequestHandler } from 'express';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import { generateRandomEquipment } from './logic/generators/equipment';
import Equipment from './models/Equipment';
import shopRouter from './routes/shop.routes';
import charactersRouter from './routes/characters.routes';
import explorationRouter from './routes/exploration.routes';
import { get404 } from './controllers/error.controller';
import { errorHandler } from './middlewares/error';
import { auth } from 'express-oauth2-jwt-bearer';
import { getUserData } from './middlewares/getUserData';
export const app = express();

const verifyToken = auth({
  audience: process.env.AUTH_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUE_URL,
  tokenSigningAlg: 'RS256',
});

app.use(cors<Request>());
app.use(verifyToken);
app.use(getUserData as RequestHandler);

app.get('/api/item', async (_, response) => {
  const randomItem = generateRandomEquipment();

  const dbItem = new Equipment(randomItem);

  await dbItem.save();

  response.json(randomItem);
});

app.use('/api/characters', charactersRouter);
app.use('/api/exploration', explorationRouter);
app.use('/api/shop', shopRouter);

app.use(get404);
app.use(errorHandler);
