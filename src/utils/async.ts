export const waitForSecondsAndResolve = <T>(seconds: number, result: T) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000 * seconds);
  });
};
