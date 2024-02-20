import express from 'express';
import { getUser } from '../controllers/users.controller';

const router = express.Router();

router.get('/', getUser);

export default router;
