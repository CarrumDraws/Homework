// -------------------------------------------------------------------------------------
// Async

// async function asyncFn() {
//   return 'async function return value';
//   // throw new Error('asyncFn() error');
// }
// function promiseFn() {
//   return Promise.resolve('async function return value');
//   // return Promise.reject(new Error("promiseFn() error"));
// }

// console.log("asyncFn() =", asyncFn());
// console.log("promiseFn() =", promiseFn());
// console.log('------');

// asyncFn().then(res => console.log("asyncFn().then(), res =", res))
//   .catch(error => console.log(error));
// promiseFn().then(res => console.log("promiseFn().then(), res =", res))
//   .catch(error => console.log(error));

// -------------------------------------------------------------------------------------
// Async-await vs Promise chain
// await on non-promise values wraps it in Promise.resolve()

// async function asyncFn(input) {
//   console.log(input, "before await");
//   await console.log(input, "await"); // evaluate expression, wait for promise to resolve
//   console.log(input, "after await");
// }

// asyncFn(1);
// asyncFn(2);

// -----------------------------------------
// function promiseChainFn(input) {
//   return Promise.resolve()
//     .then(() => {
//       console.log(input, "before await");
//       return Promise.resolve(console.log(input, "await"));
//     }).then(() => {
//       console.log(input, "after await");
//     });
// }

// promiseChainFn(1);
// promiseChainFn(2);
// -------------------------------------------------------------------------------------
// Consecutive asynchronous operations
// EX: I want to fetch some data. Only AFTER it is done, I want to fetch some more data.

// What you'd do with promises
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return fetch('https://jsonplaceholder.typicode.com/posts/2');
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// -----------------------------------------
// How you'd do it with async-await
// (async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data);

//     const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
//     const data2 = await response2.json();
//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// What async-await does under the hood
// (() => Promise.resolve()
//   .then(() => fetch('https://jsonplaceholder.typicode.com/posts/1'))
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return fetch('https://jsonplaceholder.typicode.com/posts/2');
//   })
//   .then(response2 => response2.json())
//   .then(data2 => {
//     console.log(data2);
//   })
//   .catch(error => console.log(error))
// )();
