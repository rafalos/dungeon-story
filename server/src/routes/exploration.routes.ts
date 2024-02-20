import express from 'express';
import {
  generateExploration,
  getCurrentChapter,
  getExplorations,
  getExploration,
  movePosition,
} from '../controllers/exploration.controller';

const router = express.Router();

router.get('/', getExplorations);
router.get('/:id', getExploration);
router.post('/', generateExploration);
router.get('/:id/getChapter', getCurrentChapter);
router.post('/:id/move', movePosition);

export default router;
