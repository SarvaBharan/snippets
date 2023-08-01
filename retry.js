// ! Bug: console logs before setTimeOut - need to relook
const retry = (fn, maxRetries) => {
  let condition = false;
  while (maxRetries-- > 0 && !(condition = fn())) {
    setTimeout(fn, maxRetries * 1000);
  }
};

console.log(retry(() => console.log("retrying"), 5));
