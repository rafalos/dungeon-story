import express from 'express';
import { generateSeed } from './logic/generators/seed';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import { notFound } from './handlers/notFound';
import Player from './models/Player';
import { generateRandomGem } from './logic/generators/gem';

export const app = express();

app.use(cors<Request>());

app.get('/', (_, response) => {
  response.send('works');
});

app.get('/api/seed', (_, response) => {
  const newSeed = generateSeed();

  response.json(newSeed);
});

app.get('/api/character', async (req, res) => {
  const gem = generateRandomGem();

  console.log(gem);
});

app.get('/api/getChapter', (_, response) => {});

app.use('*', notFound);
