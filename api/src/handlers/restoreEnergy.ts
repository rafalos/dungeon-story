import Player from '../models/Player';

const restoreEnergy = async () => {
  await Player.updateMany(
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
  console.log('Restored energy for players');
};

export default restoreEnergy;
