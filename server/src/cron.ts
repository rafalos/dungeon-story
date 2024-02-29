import cron from 'node-cron';
import { shopRestock } from './handlers/shopRestock';
import restoreEnergy from './handlers/restoreEnergy';

export const startCronJobs = () => {
  console.log('Starting cron scheduler');

  cron.schedule('*/5 * * * *', async () => {
    console.log('shop run');
    await shopRestock();
  });

  cron.schedule('*/30 * * * *', async () => {
    await restoreEnergy();
  });
};
