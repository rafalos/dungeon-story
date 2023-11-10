import express from 'express';
import { getNewExploration } from '../controllers/exploration.controllers';

const router = express.Router();

router.get('/new', getNewExploration);

export default router;
