import express from 'express';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import { notFound } from './handlers/notFound';
import { generateRandomEquipment } from './logic/generators/equipment';
import Equipment from './models/Equipment';
import shopRouter from './routes/shop.routes';
import explorationRouter from './routes/exploration.routes';

export const app = express();

app.use(cors<Request>());

app.get('/api/item', async (_, response) => {
  const randomItem = generateRandomEquipment();

  const dbItem = new Equipment(randomItem);

  await dbItem.save();

  response.json(randomItem);
});

app.use('/api/exploration', explorationRouter);
app.use('/api/shop', shopRouter);

app.get('/api/getChapter', (_, response) => {});

app.use('*', notFound);
