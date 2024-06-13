// -------------------------------------------------------------------------------------
// Async

// // An async function ALWAYS returns a Promise
// async function asyncFn() {
//   return "async function return value"; // Implicitly wrapped in Promise.resolve()
//   // throw new Error('asyncFn() error'); // Implicitly wrapped in Promise.reject()
// }
// // This function returns Resolved and Rejected promises, making it identical to the above
// function promiseFn() {
//   return Promise.resolve("async function return value");
//   // return Promise.reject(new Error("promiseFn() error"));
// }

// console.log("asyncFn() =", asyncFn());
// console.log("promiseFn() =", promiseFn());
// console.log("------");

// asyncFn()
//   .then((res) => console.log("asyncFn().then(), res =", res))
//   .catch((error) => console.log(error));
// promiseFn()
//   .then((res) => console.log("promiseFn().then(), res =", res))
//   .catch((error) => console.log(error));

// -------------------------------------------------------------------------------------
// Async-await vs Promise chain
// await on non-promise values wraps it in Promise.resolve()

// async function asyncFn(input) {
//   console.log(input, "before await");
//   await console.log(input, "await"); // 'await,' if attatched to a promise, pauses function execution until a promise is settled.
//   // Since console.log isn't a promise, it immediately resolves- but output interleaving can still happen.
//   console.log(input, "after await");
// }

// asyncFn(1);
// asyncFn(2);

// -----------------------------------------

// Same as above.
// .then() also returns promises.
// Return values are implicitly wrapped in a Promise.resolve()
// function promiseChainFn(input) {
//   return Promise.resolve()
//     .then(() => {
//       console.log(input, "before await");
//       return Promise.resolve(console.log(input, "await"));
//     })
//     .then(() => {
//       console.log(input, "after await");
//     });
// }

// promiseChainFn(1);
// promiseChainFn(2);

// -------------------------------------------------------------------------------------
// Using async/await with try/catch
// can be considered better than traditional Promise chaining: more readable and maintainable
// Better Error handling: In Promise Chaining you must ensure that each .then() handles errors correctly...
// ...while async/await/try/catch handles all errors uniformly.
// Also prevents "Pyramid of Doom"

// Promise Chaining
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://jsonplaceholder.typicode.com/posts/2");
//   })
//   .then((response2) => {
//     if (!response2.ok) {
//       throw new Error(`HTTP error! status: ${response2.status}`);
//     }
//     return response2.json();
//   })
//   .then((data2) => {
//     console.log(data2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async/await with try/catch
// (async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     console.log(data);

//     const response2 = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/2"
//     );
//     const data2 = await response2.json();
//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// under the hood
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

// (async () => {
//   try {
//     console.log("Hello");
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // await only pauses when it is passed a promise.
//     console.log("World");
//   } catch (error) {
//     console.log(error);
//   }
// })();
