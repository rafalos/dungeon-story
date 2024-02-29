import { shopRestock } from '../handlers/shopRestock';
import Shop from '../models/Shop';

export const recreateShop = async () => {
  const shop = await Shop.find();

  if (shop.length) return;

  console.log('No shop found. Creating new entry in database');

  const newShop = new Shop({
    items: [],
  });

  await newShop.save();

  await shopRestock()

  console.log('Shop table created succesfully');
};
