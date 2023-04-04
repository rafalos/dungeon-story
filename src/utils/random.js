export const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min) + 1;

export const randomElementFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

export const randomWithProbability = (entityArray) => {
  const randomNumber = randomInRange(0, 100);
  const chanceFactor = 100 - randomNumber;

  const result = entityArray.reduce(
    (acc, current) => {
      console.log(chanceFactor)
      if (current[1] > chanceFactor) {
        return current;
      }
      return acc;
    },
    entityArray[0]
  );
  return result[0];
};
