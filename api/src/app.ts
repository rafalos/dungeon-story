import express from 'express';
import { generateSeed } from './logic/generators/seed';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import { notFound } from './handlers/notFound';
import Player from './models/Player';

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
  const player = new Player({
    energy: 3,
    experience: 0,
    gold: 100,
    level: 1,
    maxExperience: 0,
    name: 'Rafal',
    statPoints: 0,
  });

  await player.save();

  res.json({
    message: 'Created player',
  });
});

app.get('/api/getChapter', (_, response) => {});

app.use('*', notFound);
