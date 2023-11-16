import { app } from './app';
import mongoose from 'mongoose';
import { recreateShop } from './utils/recreateShop';
import { startCronJobs } from './cron';
import { shopRestock } from './handlers/shopRestock';
const mongoUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pfzxkba.mongodb.net/dungeon-story-dev`;

const init = async () => {
  console.log(`Api is starting in ${process.env.NODE_ENV} mode`);
  await mongoose.connect(mongoUri);
  console.log('Connected to the database succesfully');
  await recreateShop();

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });

  startCronJobs();
};

init().catch((e) => {
  if (e instanceof Error) {
    console.log(e.message);
  }
});
