/* The `promisify` function is a utility function that takes a callback-based function as input
and returns a new function that returns a promise. This allows you to use the callback-based
function in a more convenient and readable way with promises. */
const promisify = (fn) =>
  function (...args) {
    return new Promise((resolve, reject) => {
      return fn(...args, (err, res) => (err ? reject(err) : resolve(res)));
    });
  };
const delay = promisify((ms, cb) => setTimeout(cb, ms));
const by = 3000;
delay(by).then(() => console.log(`Hey! executed after ${delayBy / 1000} secs`));
