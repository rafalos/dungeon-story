export const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const unflooredRandomInRange = (min: number, max: number) => {
  const rnd = Math.random() * (max - min) + min;

  return +rnd.toFixed(2);
};

export const randomElementFromArray = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const randomWithProbability = <T>(entityArray: [T, number][]): T => {
  const chancesArray = [];

  for (let i = 0; i < entityArray.length; i++) {
    for (let j = 0; j < +entityArray[i][1]; j++) {
      chancesArray.push(entityArray[i][0]);
    }
  }

  return randomElementFromArray(chancesArray);
};
