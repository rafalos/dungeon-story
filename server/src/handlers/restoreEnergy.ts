import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { app } from '../app';
import User from '../models/User';

const restoreEnergy = async () => {
  const io: Server<
    DefaultEventsMap,
    DefaultEventsMap,
    DefaultEventsMap,
    unknown
  > = app.get('io');

  await User.updateMany(
    {
      energy: {
        $lt: 3,
      },
    },
    {
      $set: {
        energy: 3,
      },
    }
  );

  io.emit('energyRestored');
  console.log('Restored energy for characters');
};

export default restoreEnergy;
