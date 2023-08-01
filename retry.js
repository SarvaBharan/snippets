// ! Bug: console logs before setTimeOut - need to relook
/**
 * The `retry` function retries a given function a maximum number of times until a condition is met.
 * @param fn - The `fn` parameter is a function that will be executed repeatedly until a certain
 * condition is met.
 * @param maxRetries - The `maxRetries` parameter is the maximum number of times the function `fn` will
 * be retried.
 */
const retry = (fn, maxRetries) => {
  let condition = false;
  while (maxRetries-- > 0 && !(condition = fn())) {
    setTimeout(fn, maxRetries * 1000);
  }
};

console.log(retry(() => console.log("retrying"), 5));
