export const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const randomElementFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

export const randomWithProbability = (entityArray) => {
  const randomNumber = randomInRange(0, 100);
  const percentageChance = 100 - randomNumber;

  const result = entityArray.reduce((acc, current) => {
    if (current[1] > percentageChance) {
      return current;
    }
    return acc;
  }, entityArray[0]);
  return result[0];
};
