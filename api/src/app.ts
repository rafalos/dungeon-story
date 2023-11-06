import express from 'express';
import { generateSeed } from './logic/generators/seed';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import { notFound } from './handlers/notFound';
import Player from './models/Player';
import { generateRandomGem } from './logic/generators/gem';
import { generateRandomEquipment } from './logic/generators/equipment';

export const app = express();

app.use(cors<Request>());

app.get('/', (_, response) => {
  response.send('works');
});

app.get('/api/seed', (_, response) => {
  const newSeed = generateSeed();

  response.json(newSeed);
});

app.get('/api/item', (_, response) => {
  const randomItem = generateRandomEquipment();

  response.json(randomItem)
});

app.get('/api/character', async (req, res) => {
  const gem = generateRandomEquipment();

  console.log(gem);
});

app.get('/api/getChapter', (_, response) => {});

app.use('*', notFound);
