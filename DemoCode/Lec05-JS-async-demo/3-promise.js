// -------------------------------------------------------------------------------------
// Promises

// Resolve or reject ends execution.
// const promise = new Promise(
//   function (resolve, reject) {
//     resolve({ id: 1, name: "ethan" });
//     // reject('Server is busy.');
//   });

// console.log(promise);

// promise.then(
//   function (result) {
//     console.log("Success: ", result);
//   },
//   function (error) {
//     console.log(`Error: ${error}`);
//   }
// );

// -----------------------------------------
// Same code, but chain .then() after creating the promise

// const promise = new Promise(
//   function (resolve, reject) {
//     resolve({ id: 1, name: "ethan" });
//     // reject('Server is busy.');
//   }).then(
//     function (result) {
//       console.log("Success: ", result);
//     },
//     function (error) {
//       console.log(`Error: ${error}`);
//     }
//   );

// console.log(promise);

// -----------------------------------------
// Promisify: wrap a function that accepts a callback in a promise, giving it access to a resolve & reject callback.

// const promisify = document.getElementById('promisify');

// setTimeout(function () {
//   promisify.innerText = "Regular setTimeout callback function";
// }, 2000);
// --------
// const setTimeoutPromise = new Promise(function (resolve, reject) {
//   if (true) {
//     setTimeout(function () {
//       resolve("Promise setTimeout callback function");
//     }, 2000);
//   } else reject("Failed");
// }).then(function (value) {
//   promisify.innerText = value;
// });

// -----------------------------------------
// Promise chains

// new Promise(function (resolve, reject) {
//   resolve(1);
// })
//   .then(function (result1) {
//     console.log('First .then(), result1 =', result1);
//     return result1 * 2;
//   })
//   .then(function (result2) {
//     console.log('Second .then(), result2 =', result2);
//     return result2 * 3;
//   })
//   .then(function (result3) {
//     console.log('Third .then(), result3 =', result3);
//   });
