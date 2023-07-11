const promisify = (fn) =>
  function (...args) {
    return new Promise((resolve, reject) => {
      return fn(...args, (err, res) => (err ? reject(err) : resolve(res)));
    });
  };
const delay = promisify((ms, cb) => setTimeout(cb, ms));
const delayBy = 3000;
delay(delayBy).then(() =>
  console.log(`Hey! executed after ${delayBy / 1000} secs`)
);
