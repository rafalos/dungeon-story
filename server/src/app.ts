import express from 'express';
import cors from 'cors';
require('dotenv').config();
require('express-async-errors');
import apiRouter from './routes/api.routes';

import path from 'path';

export const app = express();

app.use(cors());
app.use('/api', apiRouter);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}
