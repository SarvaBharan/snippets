const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function retryWithBackOff(
  asyncFn,
  attemptNum = 0,
  maxRetries = 5,
  base = 50
) {
  try {
    return await asyncFn();
  } catch (err) {
    await sleep(Math.random() * (2 ** attemptNum * base));
    console.log("attemptNum :", attemptNum);
    if (++attemptNum > maxRetries) throw err.message;
    return retryWithBackOff(asyncFn, attemptNum, maxRetries, base);
  }
}
