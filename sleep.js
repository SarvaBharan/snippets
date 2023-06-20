const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function lazyFunc() {
  console.log("Before invoking sleep func'");
  await sleep(5000);
  console.log("After sleep func' invoked");
}

lazyFunc();
