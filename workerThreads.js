const { isMainThread, parentPort, Worker } = require("worker_threads");
const os = require("os");

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on("message", (res) => {
    console.log(`Result from worker ${res}`);
  });
} else {
  const someData = [2, 4, 2, 1, 5, 6, 7].sort(() => Math.random() - 0.5);
  parentPort.postMessage(someData);
}
