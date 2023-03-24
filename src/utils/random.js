export const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const randomElementFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];
