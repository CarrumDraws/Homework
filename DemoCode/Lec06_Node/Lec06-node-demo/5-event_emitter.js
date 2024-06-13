const EventEmitter = require("events"); // Core Module

// Create an EventEmitter 'myEmitter'
// 'myEmitter' can emit events and and handle them via event listeners.
const myEmitter = new EventEmitter();
// Register a "greeting" event listener
myEmitter.on("greeting", function (name) {
  console.log(`${name} says hi`);
});

const second = () => console.log("second");

// register a second "greeting" event listener.
// All listeners registered for the event are called syncronously, one after the other
myEmitter.on("greeting", second);

console.log("before emit"); // 1
myEmitter.emit("greeting", "fan"); // 2, 3 : Triggers First event listener then second
myEmitter.emit("greeting", "luo"); // 4, 5 : Triggers First event listener then second
console.log("after emit"); // 6

// remove the second "greeting" event listener.
myEmitter.removeListener("greeting", second);
myEmitter.emit("greeting", "fan"); // 7 : Triggers First event listener

// once;
// myEmitter.once("once", function () {
//   console.log("usage of once");
// });
// myEmitter.emit("once"); // Triggers
// myEmitter.emit("once"); // Doesn't
