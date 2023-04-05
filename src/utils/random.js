export const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const randomElementFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

export const randomWithProbability = (entityArray) => {
  const randomNumber = randomInRange(0, 100);
  const chancesArray = [];

  for (let i = 0; i < entityArray.length; i++) {
    for (let j = 0; j < entityArray[i][1]; j++) {
      chancesArray.push(entityArray[i][0]);
    }
  }

  return randomElementFromArray(chancesArray);
};
