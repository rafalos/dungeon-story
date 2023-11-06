import express from 'express';
import { getNewExplorationSeed } from '../controllers/exploration.controllers';

const router = express.Router();

router.get('/newSeed', getNewExplorationSeed);

export default router;
