import express from 'express';
import {
  generateExploration,
  getExplorations,
  getExploration,
  movePosition,
  getCurrentState,
} from '../controllers/exploration.controller';

const router = express.Router();

router.get('/', getExplorations);
router.get('/:id', getExploration);
router.post('/', generateExploration);
router.get('/:id/getChapter', getCurrentState);
router.post('/:id/move', movePosition);

export default router;
