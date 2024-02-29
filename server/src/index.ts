import { app } from './app';
import mongoose from 'mongoose';
import { recreateShop } from './utils/recreateShop';
import { startCronJobs } from './cron';
const mongoUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pfzxkba.mongodb.net/${process.env.MONGODB_DATABASE}`;
import { createServer } from 'http';
import { Server } from 'socket.io';

const init = async () => {
  const HTTPserver = createServer(app);
  const ioServer = new Server(HTTPserver, {
    cors: {
      origin: '*',
    },
  });
  app.set('io', ioServer);
  console.log(`Api is starting in ${process.env.NODE_ENV} mode`);

  await mongoose.connect(mongoUri);
  console.log('Connected to the database succesfully');
  await recreateShop();

  startCronJobs();
  HTTPserver.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

init().catch((e) => {
  if (e instanceof Error) {
    console.log(e.message);
  }
});
