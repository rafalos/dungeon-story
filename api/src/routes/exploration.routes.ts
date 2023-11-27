import express from 'express';
import {
  getNewExploration,
  getNextChapter,
} from '../controllers/exploration.controllers';

const router = express.Router();

router.get('/new', getNewExploration);
router.get('/:id/nextChapter', getNextChapter);

export default router;
