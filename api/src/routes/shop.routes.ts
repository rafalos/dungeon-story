import express from 'express';
import { buyItem, getShop } from '../controllers/shop.controller';

const router = express.Router();

router.get('/', getShop);
router.post('/buy/:id', buyItem);

export default router;
