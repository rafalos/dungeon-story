import express from 'express';
import { generateSeed } from './logic/generators/seed';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import { notFound } from './handlers/notFound';
import Player from './models/Player';
import { generateRandomGem } from './logic/generators/gem';
import { generateRandomEquipment } from './logic/generators/equipment';
import Equipment from './models/Equipment';
import { shopRestock } from './handlers/shopRestock';

export const app = express();

app.use(cors<Request>());

app.get('/', (_, response) => {
  response.send('works');
});

app.get('/api/seed', (_, response) => {
  const newSeed = generateSeed();

  response.json(newSeed);
});

app.get('/api/item', async (_, response) => {
  const randomItem = generateRandomEquipment();

  const dbItem = new Equipment(randomItem);

  await dbItem.save();

  response.json(randomItem);
});

app.get('/api/character', async (req, res) => {
  await shopRestock();
});

app.get('/api/getChapter', (_, response) => {});

app.use('*', notFound);
