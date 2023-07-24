const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
