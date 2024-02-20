import express from 'express';
import cors from 'cors';
require('dotenv').config();
require('express-async-errors');
import apiRouter from './routes/api.routes';

import path from 'path';

export const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
