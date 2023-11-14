import Character from '../models/Character';

const restoreEnergy = async () => {
  await Character.updateMany(
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
