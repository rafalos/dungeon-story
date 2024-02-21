import express from 'express';
import { getStories, getStory } from '../controllers/story.controller';

const router = express.Router();

router.get('/', getStories);
router.get('/:id', getStory);

export default router;
