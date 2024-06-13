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

// const seconds = new Date().getSeconds();

// // setTimeout's timeout is the minimum delay - the callback could be delayed for longer!
// setTimeout(function () {
//   console.log(
//     `setTimeout callback was executed after ${
//       new Date().getSeconds() - seconds
//     } seconds.`
//   );
// }, 1000); // 1 second delay (Actually 2 seconds because the sync code below executes first!)

// // Synchronous code will finish first, then execute callbacks
// while (true) {
//   if (new Date().getSeconds() - seconds >= 2) {
//     break;
//   }
// }

// -----------------------------------------
// What order are these console.log statements outputted?
// Note: setTimeout isn't directly added to the Macrotask Queue!
// Timers are managed internally by the Browser's JS engine, then added to the Macrotask Queue once the timer is over.
// Thats why a Fast executes before Slow even though it is added to the Call Stack afterwards.

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

// setTimeout(function () {
//   console.log(`Slow`);
// }, 2000);
// setTimeout(function () {
//   console.log(`Fast`);
// }, 1000);
