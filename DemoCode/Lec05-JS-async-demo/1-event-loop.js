// -------------------------------------------------------------------------------------
// Event loop

// console.log(`start: ${new Date()}`);
// setTimeout(function () {
//   console.log(`setTimeout ${new Date()}`);
// }, 2000); // 2 second timeout
// console.log(`end: ${new Date()}`);

// -----------------------------------------
// Even without a timeout, it is still executed after synchronous code.

// console.log(`start: ${new Date()}`);
// setTimeout(function () {
//   console.log(`setTimeout ${new Date()}`);
// });
// console.log(`end: ${new Date()}`);

// -----------------------------------------
// setTimeout's timeout is the minimum delay. The callback can be delayed for longer.

// const seconds = new Date().getSeconds();

// setTimeout(function () {
//   console.log(`setTimeout callback was executed after ${new Date().getSeconds() - seconds} seconds.`);
// }, 500); // 0.5 second delay

// // Synchronous code will finish first, then execute callbacks
// while (true) {
//   if (new Date().getSeconds() - seconds >= 2) {
//     break;
//   }
// }

// -----------------------------------------
// What order are these console.log statements outputted?

// console.log("start: \n", new Date());
// setTimeout(function () {
//   console.log(`setTimeout 2000ms
//   ${new Date()}`);
// }, 2000);
// console.log("end: \n", new Date());

// console.log("start: \n", new Date());
// setTimeout(function () {
//   console.log(`setTimeout 1000ms
//   ${new Date()}`);
// }, 1000);
// console.log("end: \n", new Date());
