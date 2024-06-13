// -------------------------------------------------------------------------------------
// Try-catch-finally

// try {
//   console.log("About to execute undefined function.");
//   undefinedFunction(); // stops execution, jump to catch
//   console.log("Failed to execute undefined function.");
// } catch (error) {
//   console.log("Caught an error:\n", error);
// } finally {
//   console.log("This will always execute.");
// }

// -------------------------------------------------------------------------------------
// Promise: Error handling
// Errors stop further execution of the promise chain
// We use .catch() at the top level to handle errors anywhere in a Promise chain.

// new Promise(function (resolve, reject) {
//   resolve(1);
//   //   reject("Rejected");
// })
//   .then(function (result1) {
//     console.log("First .then(), result1 =", result1);
//     return result1 * 2;
//   })
//   .then(function (result2) {
//     throw new Error("Throw an error.");
//     console.log("Second .then(), result2 =", result2);
//     return result2 * 3;
//   })
//   .then(function (result3) {
//     console.log("Third .then(), result3 =", result3);
//   })
//   .catch((error) => {
//     console.log("Caught: error =", error);
//   });

// -------------------------------------------
// .then() takes a second argument that handles rejections.
// The .then() will then handle the error and pass new data to the next .then().

// new Promise(function (resolve, reject) {
//   // resolve(1);
//   reject("Rejected");
// })
//   .then(
//     function (result1) {
//       console.log("First .then(), result1 =", result1);
//       return result1 * 2;
//     },
//     function (error) {
//       console.log("First .then(), error =", error);
//       return "Returned from first .then() error callback.";
//     }
//   )
//   .then(function (result2) {
//     // throw new Error('Throw an error.');
//     console.log("Second .then(), result2 =", result2);
//     return result2 * 3;
//   })
//   .then(function (result3) {
//     console.log("Third .then(), result3 =", result3);
//   });

// -------------------------------------------
// try/catch is a syncronous operation. Therefore, it can't catch asynchronous errors thrown by a promise chain.
// Errors thrown by .then() instead propegate down to .catch().

try {
  new Promise(function (resolve, reject) {
    resolve(1);
    // reject("Rejected");
  })
    .then(function (result1) {
      console.log("First .then(), result1 =", result1);
      return result1 * 2;
    })
    .then(function (result2) {
      throw new Error("Throw an error.");
      console.log("Second .then(), result2 =", result2);
      return result2 * 3;
    })
    .then(function (result3) {
      console.log("Third .then(), result3 =", result3);
    });
} catch (error) {
  console.log("Caught: error =", error);
}
