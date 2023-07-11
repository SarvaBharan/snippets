const promisify = (fn) =>
  function (...args) {
    return new Promise((resolve, reject) => {
      return fn(...args, (err, res) => (err ? reject(err) : resolve(res)));
    });
  };
const delay = promisify((ms, cb) => setTimeout(cb, ms));

delay(3000).then(() => console.log("Hey done!"));
