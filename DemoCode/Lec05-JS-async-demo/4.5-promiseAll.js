// Using Promise.all() to ensure that all Promises resolve before continuing execution.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(`Promise 1: ${new Date()}`), 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(`Promise 2: ${new Date()}`), 1000);
//   // setTimeout(() => reject(`Promise 2: ${new Date()}`), 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve(`Promise 3: ${new Date()}`), 1000);
//   setTimeout(() => reject(`Promise 3: ${new Date()}`), 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((result) => console.log("Promise.all() results =", result))
//   .catch((result) => console.log("Error =", result));

// -----------------------------------------
// Using Promise.allSettled() to get all the Promise results before continuing execution.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(`Promise 1: ${new Date()}`), 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve(`Promise 2: ${new Date()}`), 1000);
//   setTimeout(() => reject(`Promise 2: ${new Date()}`), 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve(`Promise 3: ${new Date()}`), 1000);
//   setTimeout(() => reject(`Promise 3: ${new Date()}`), 3000);
// });
// Promise.allSettled([promise1, promise2, promise3])
//   .then((result) => console.log("Promise.allSettled() results =", result))
//   .catch((result) => console.log("Error =", result));
