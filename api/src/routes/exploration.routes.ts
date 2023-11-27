import express from 'express';
import {
  getExploration,
  getNextChapter,
} from '../controllers/exploration.controllers';

const router = express.Router();

router.get('/new', getExploration);
router.get('/:id/nextChapter', getNextChapter);

export default router;
