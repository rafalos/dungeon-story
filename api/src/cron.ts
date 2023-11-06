import cron from 'node-cron';
import { shopRestock } from './handlers/shopRestock';

export const startCronJobs = () => {
  console.log('Starting cron scheduler');

  cron.schedule('*/5 * * * *', async () => {
    shopRestock();
  });
};
