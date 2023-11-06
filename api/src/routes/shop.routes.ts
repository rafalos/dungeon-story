import express from 'express';
import { getShop } from '../controllers/shop.controllers';

const router = express.Router();

router.get('/', getShop);

export default router;
