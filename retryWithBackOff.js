const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * The function `retryWithBackOff` retries an asynchronous function with an increasing delay between
 * each attempt, up to a maximum number of retries.
 * @param asyncFn - The async function that you want to retry with backoff. This function should return
 * a promise.
 * @param [attemptNum=0] - The `attemptNum` parameter represents the current attempt number of the
 * function call. It is used to keep track of the number of retries that have been made so far.
 * @param [maxRetries=12] - The `maxRetries` parameter specifies the maximum number of times the
 * `asyncFn` function should be retried before giving up.
 * @param [base=50] - The base parameter is the base value for calculating the backoff delay. It is
 * multiplied by 2 raised to the power of the attempt number to determine the delay between retries.
 * @returns The function `retryWithBackOff` returns the result of the `asyncFn` function if it is
 * successful. If there is an error, it will retry the `asyncFn` function with an exponential backoff
 * delay and a maximum number of retries. If the maximum number of retries is reached, it will throw
 * the error message.
 */
async function retryWithBackOff(
  asyncFn,
  attemptNum = 0,
  maxRetries = 12,
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

async function fetchData() {
  const random = Math.random();
  if (random < 0.8) {
    throw new Error("API request failed");
  } else {
    return { data: "Your API data" };
  }
}

async function getDataWithRetry() {
  try {
    const result = await retryWithBackOff(fetchData);

    console.log("API response:", result);
  } catch (err) {
    console.error("API request failed after all retries:", err.message);
  }
}

getDataWithRetry();
