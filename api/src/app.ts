import express from 'express';
import { generateSeed } from './logic/generators/seed';
require('dotenv').config();

export const app = express();

app.get('/', (_, response) => {
  response.send('works');
});

app.get('/seed', (_, response) => {
  const newSeed = generateSeed();

  response.json(newSeed);
});
