import express from 'express';
import cors from 'cors';
require('dotenv').config();
require('express-async-errors');
import apiRouter from './routes/api.routes';

export const app = express();

app.use(cors());
app.use('/api', apiRouter);
