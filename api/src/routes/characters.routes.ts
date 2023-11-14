import express from 'express';
import { getCharacter } from '../controllers/characters.controller';

const router = express.Router();

router.get('/', getCharacter);

export default router;
