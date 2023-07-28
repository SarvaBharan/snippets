const { isMainThread, parentPort, Worker } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on("message", (res) => {
    console.log(`Result from worker ${res}`);
  });
} else {
  const someData = 20;
  parentPort.postMessage(someData * 5);
}
