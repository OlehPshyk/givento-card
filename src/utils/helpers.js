export default function pauseFunction(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, delay);
  });
  return promise;
}
