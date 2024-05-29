// Microtasks (promises) are higher priority than macrotasks (timeout, interval).

// console.log("script start");

// setTimeout(function () {
//   console.log("setTimeout");
// });

// Promise.resolve()
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });

// console.log("script end");

// -----------------------------------------
// Promise chain with macrotasks (timeout).

// Promise.resolve(1).then(function (result) {
//   setTimeout(() => console.log('first .then(), result =', result), 2000);
//   return result * 2;
// }).then(function (result) {
//   setTimeout(() => console.log('second .then(), result =', result), 1000);
//   return result * 3;
// }).then(function (result) {
//   console.log('third .then(), result =', result);
// });
