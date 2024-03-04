import { shopRestock } from './handlers/shopRestock';
import restoreEnergy from './handlers/restoreEnergy';
import { CronJob } from 'cron';

const refreshShopJob = new CronJob(
  '*/5 * * * *',
  async () => {
    await shopRestock();
  },
  null
);

const restoreEnergyJob = new CronJob(
  '*/30 * * * *',
  async () => {
    await restoreEnergy();
  },
  null
);

export const startCronJobs = () => {
  console.log('Starting cron scheduler');

  refreshShopJob.start();
  restoreEnergyJob.start();
};

export { refreshShopJob };
