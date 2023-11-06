import express from 'express';
import { newExploration } from '../controllers/exploration.controllers';

const router = express.Router();

router.get('/newSeed', newExploration);

export default router;
