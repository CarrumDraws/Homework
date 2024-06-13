console.log("Sync 1"); // 1 (Syncronous)

setTimeout(() => console.log("Timeout"), 0); // 5 : Macrotask Queue- Low Priority

setImmediate(() => console.log("Immediate")); // 6 : Macrotask Queue- Low Priority

process.nextTick(() => console.log("Next Tick")); // 3 : Highest Priority Async Func

Promise.resolve().then(() => console.log("Promise")); // 4 : Microtask Queue- High Priority

console.log("Sync 2"); // 2 (Syncronous)
