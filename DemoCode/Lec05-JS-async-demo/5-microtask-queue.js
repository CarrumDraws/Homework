// Microtasks (promises) are higher priority than macrotasks (timeout, interval).

// console.log("script start"); // 1

// setTimeout(function () {
//   console.log("setTimeout"); // 5
// });

// Promise.resolve()
//   .then(function () {
//     console.log("promise1"); // 3 (Higher Priority)
//   })
//   .then(function () {
//     console.log("promise2"); // 4 (Higher Priority)
//   });

// console.log("script end"); // 2

// -----------------------------------------
// Promise chain with macrotasks (timeout).
// Note: Timers aren't directly added to the macrotask queue.
// Timers are managed internally by the Browser's JS engine.
// They are placed in the Macrotask queue after they time out.
// Promise.resolve(1)
//   .then(function (result) {
//     setTimeout(() => console.log("first .then(), result =", result), 2000); // Third: Added to Timer heap
//     return result * 2;
//   })
//   .then(function (result) {
//     setTimeout(() => console.log("second .then(), result =", result), 1000); // Second: Added to Timer Heap
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log("third .then(), result =", result); // First
//   });

// -------------------------------------
// Like above, but first .then() takes 2 seconds to return value
// Promise.resolve(1)
//   .then(function (result) {
//     // Returns Promise that takes time to resolve. Blocks entire chain
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         console.log("first .then(), result =", result); // 1
//         resolve(result * 2);
//       }, 2000);
//     });
//   })
//   .then(function (result) {
//     setTimeout(function () {
//       console.log("second .then(), result =", result); // 3
//     }, 1000);
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log("third .then(), result =", result); // 2
//   });
