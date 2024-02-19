import express from 'express';
import { getShop } from '../controllers/shop.controller';

const router = express.Router();

router.get('/', getShop);

export default router;
