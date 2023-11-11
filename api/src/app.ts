import express from 'express';
import cors from 'cors';
require('dotenv').config();
import { Request } from 'express';
import { generateRandomEquipment } from './logic/generators/equipment';
import Equipment from './models/Equipment';
import shopRouter from './routes/shop.routes';
import explorationRouter from './routes/exploration.routes';
import { get404 } from './controllers/error.controller';
import restoreEnergy from './handlers/restoreEnergy';
import Player from './models/Player';
import { errorHandler } from './middlewares/error';

export const app = express();

app.use(cors<Request>());

app.get('/api/tst', async (req, res) => {
  await restoreEnergy();
});

app.get('/api/item', async (_, response) => {
  const randomItem = generateRandomEquipment();

  const dbItem = new Equipment(randomItem);

  await dbItem.save();

  response.json(randomItem);
});

app.use('/api/exploration', explorationRouter);
app.use('/api/shop', shopRouter);

app.use(get404);

app.use(errorHandler);
