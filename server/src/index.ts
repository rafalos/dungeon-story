import { app } from './app';
import mongoose from 'mongoose';
import { recreateShop } from './utils/recreateShop';
import { startCronJobs } from './cron';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { shopRestock } from './handlers/shopRestock';
import restoreEnergy from './handlers/restoreEnergy';

const init = async () => {
  const HTTPserver = createServer(app);
  const ioServer = new Server(HTTPserver, {
    cors: {
      origin: '*',
    },
  });
  app.set('io', ioServer);
  console.log(`Api is starting in ${process.env.NODE_ENV} mode`);

  try {
    await mongoose.connect(process.env.MONGODB!)

  } catch(error) {
    console.log(error)
  } 

  console.log('Connected to the database succesfully');
  await recreateShop();

  startCronJobs();

  await shopRestock();
  await restoreEnergy();
  HTTPserver.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

init().catch((e) => {
  if (e instanceof Error) {
    console.log(e.message);
  }
});
