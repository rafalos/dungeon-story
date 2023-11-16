import User from '../models/User';

const restoreEnergy = async () => {
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
  console.log('Restored energy for characters');
};

export default restoreEnergy;
