export const timeoutAfterSeconds = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Request timeout');
    }, timeout * 1000);
  });
};
