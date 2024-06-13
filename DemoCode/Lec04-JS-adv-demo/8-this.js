// What 'this' refers to? Tip: always "console.log(this)" whenever you use it.
// It differs in the browser vs outside of the browser, like in Node.js.

// -------------------------------------------------------
// Global Objects holds properties and methods that are available globally across the entire Node.js/Browser application, across different files.

// Global Object in Node.js = 'global'
// Global object in Browser = 'window'

// module.exports defines the values (objects, functions, variables) that the module exports, and is specific to a single file.

// console.log(this); // Refers to module.exports, NOT the global object

// // NODEJS ENV
// console.log(this === global); // false
// console.log(this === module.exports); // true

// BROWSER ENV
// console.log(this === window); // true

// Note: In a browser environment, you can't access "global" or "module.exports." Instead, they are both replaced by "window," which is the browser's global variable.

// --------------------------------------------------------------------------------------
// "use strict"; // Makes keyword function this undefined, if keyword function is invoked in any function

// // Is this accurate...??
// this.a = 2; // setting properties on the global object
// console.log(this); // module.exports

// (function () {
//   console.log(this);
// })(); // global object, undefined if strict mode
// function func() {
//   console.log(this);
// }
// func();
// console.log(this);
// (() => {
//   console.log(this);
// })(); // module.exports

// --------------------------------------------------------------------------------------
// const user = {
//   firstname: "ethan",
//   state: "NJ",
//   logUser: function () {
//     console.log(this); // Object > Keyword Function : this = user / global object
//     console.log(`name: ${this.firstname}, state: ${this.state}`);
//   },

//   logUser2: () => {
//     this.a = 5; // Sets module.exports
//     console.log(this); // Object > Arrow Function : this = module.exports
//     console.log(`name: ${this.firstname}, state: ${this.state}`); // Undef
//   },
// };

// -------------------------------------------
// Keyword Functions
// If a keyword function is a method (declared in object) and is invoked by accessing the object, 'this' refers to the parent object.

// user.logUser(); // Calls logUser directly: "this" = 'user' : the function is invoked as a method of the 'user' object

// let logFn = user.logUser;
// logFn(); // Calls logUser indirectly: "this" = global object : the function is called as a "standalone" function

// Arrow Functions : If an arrow function is a method (defined in an object), 'this' refers to the global object (browser) or itself (node).
// Arrow functions lack their own 'this' context; therefore they refer to the surrounding scope.

// user.logUser2();

// let logFn2 = user.logUser2; // Same as above
// logFn2();

// --------------------------------------------------------------------------------------
// Arrow functions in keyword functions
// If it is declared in a keyword function scope, the arrow function uses 'this' reference from the scope where it's defined.

// const user = {
//   firstname: "ethan",
//   state: "NJ",
//   logUser: function () {
//     console.log(this); // Refers to user / global object
//     console.log(`name: ${this.firstname}, state: ${this.state}`);

//     // const innerFunction = function () {
//     //   console.log(this); // this = global function
//     //   console.log(`name: ${this.firstname}, state: ${this.state}`);
//     // };
//     // innerFunction();

//     // const innerFunction = () => {
//     //   console.log(this); // Same as above
//     //   console.log(`name: ${this.firstname}, state: ${this.state}`);
//     // };
//     // innerFunction();

//     // const innerFunction = () => {
//     //   (() => {
//     //     console.log(this); // Same as above
//     //     console.log(`name: ${this.firstname}, state: ${this.state}`);
//     //   })();
//     // };
//     // innerFunction();
//   },
//   logUser2: () => {
//     this.a = 2;
//     console.log(this); // this = module.exports
//     console.log(`name: ${this.firstname}, state: ${this.state}`);

//     //   const innerFunction = function () {
//     //     console.log(this); // this = global function
//     //     console.log(`name: ${this.firstname}, state: ${this.state}`);
//     //   };
//     //   innerFunction();

//     const innerFunction = () => {
//       console.log(this); // Same as above
//       console.log(`name: ${this.firstname}, state: ${this.state}`);
//     };
//     innerFunction();
//   },
// };

// user.logUser(); // this = user

// let logFn = user.logUser;
// logFn(); // this = global object

// Arrow functions lack 'this'; same results regardless of invokation
// user.logUser2();
// let logFn2 = user.logUser2;
// logFn2();

// ------------------------------
// EVENT HANDLERS

// document.getElementById("button").addEventListener("click", () => {
//   console.log("Clicked");
//   console.log(this); // Global Object
// });

// document.getElementById("button").addEventListener("click", function () {
//   console.log("Clicked");
//   console.log(this); // Button
// });

// --------------------------------------------------------------------------------------
// Call, apply, bind

// const fn = function (num1, num2) {
//   console.log("fn this =", this); // this = global var
//   console.log(`${this.num0} | ${num1} | ${num2}`);
// };

// const obj = {
//   num0: 0,
// };

// fn(1, 2);

// fn.call(obj, 1, 2);
// fn.apply(obj, [1, 2]);

// const bindFn = fn.bind(obj);
// console.log("bindFn =", bindFn);
// bindFn(1, 2);
// bindFn(3, 4);
// bindFn(5, 6);
