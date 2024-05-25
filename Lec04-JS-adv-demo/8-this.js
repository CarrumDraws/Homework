// What 'this' refers to? Tip: always "console.log(this)" whenever you use it.
// It differs in the browser vs outside of the browser, like in Node.js.

// --------------------------------------------------------------------------------------
// "use strict"; // Makes keyword function this undefined, if keyword function is invoked in any function
// this.a = 2; // setting properties on the global object

// console.log(this); // global object

// (function () { console.log(this); })(); // global object, undefined if strict mode

// (() => { console.log(this); })(); // global object

// --------------------------------------------------------------------------------------

// const user = {
//   firstname: 'ethan',
//   state: 'NJ',
//   logUser: function () {
//     console.log(this);
//     console.log(`name: ${this.firstname}, state: ${this.state}`);
//   },
//   logUser2: () => {
//     // this.a = 5;
//     console.log(this);
//     console.log(`name: ${this.firstname}, state: ${this.state}`);
//   }
// };

// -------------------------------------------
// keyword 'function'
// If a keyword function is a method (declared in object) and is invoked by accessing the object, 'this' refers to the parent object.

// user.logUser();

// let logFn = user.logUser; // logFn has the reference to the function
// logFn();

// -------------------------------------------
// Arrow functions
// If an arrow function is a method (defined in an object), 'this' refers to the global object (browser) or itself (node).

// user.logUser2();

// let logFn2 = user.logUser2; // logFn has the reference to the function
// logFn2();

// --------------------------------------------------------------------------------------
// Arrow functions in keyword functions
// If it is declared in a keyword function scope, the arrow function uses 'this' reference from the scope where it's defined.

// const user = {
//   firstname: 'ethan',
//   state: 'NJ',
//   logUser: function () {
//     console.log(this);
//     console.log(`name: ${this.firstname}, state: ${this.state}`);

//     // const innerFunction = () => {
//     //   console.log(this);
//     //   console.log(`name: ${this.firstname}, state: ${this.state}`);
//     // };
//     // innerFunction();

//     const innerFunction = () => {

//       (() => {
//         console.log(this);
//         console.log(`name: ${this.firstname}, state: ${this.state}`);
//       })();
//     };
//     innerFunction();
//   },
//   logUser2: () => {
//     // this.a = 2;
//     console.log(this);
//     console.log(`name: ${this.firstname}, state: ${this.state}`);

//     const innerFunction = function () {
//       console.log(this);
//       console.log(`name: ${this.firstname}, state: ${this.state}`);
//     };
//     innerFunction();
//   }
// };

// user.logUser();

// user.logUser2();

// Not like keyword function, which depends on where you invoke it.
// let logFn2 = user.logUser2;
// logFn2();

// --------------------------------------------------------------------------------------
// Call, apply, bind

// const fn = function (num1, num2) {
//   console.log("fn this =", this);
//   console.log(`${this.num0} | ${num1} | ${num2}`);
// };

// const obj = {
//   num0: 0
// };

// fn(1, 2);

// fn.call(obj, 1, 2);
// fn.apply(obj, [1, 2]);

// const bindFn = fn.bind(obj);
// console.log("bindFn =", bindFn);
// bindFn(1, 2);
// bindFn(3, 4);
// bindFn(5, 6);
