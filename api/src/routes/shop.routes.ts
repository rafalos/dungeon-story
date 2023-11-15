import express from 'express';
import { buyItem, getShop } from '../controllers/shop.controllers';

const router = express.Router();

router.get('/', getShop);
router.post('/buy/:id', buyItem);

export default router;
