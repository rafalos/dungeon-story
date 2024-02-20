import express from 'express';
import cors from 'cors';
require('dotenv').config();
require('express-async-errors');
import { errorHandler } from './middlewares/error';
import apiRouter from './routes/api.routes';
import { notFound } from './middlewares/404';

import path from 'path';

export const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use(notFound);
app.use(errorHandler);
