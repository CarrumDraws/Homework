// EX: Implement a function that can be called multiple times to increment a variable, log the output.

// let counter = 0;
// function add() {
//   counter++;
//   return counter;
// }
// console.log(add());
// console.log(add());
// console.log(add());

// // // ISSUE! Counter is accessible anywhere.
// counter = 10;
// console.log(counter);

// ---------------------------------------------
// function counter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }

// const add = counter();
// console.log(add());
// console.log(add());
// console.log(add());

// Cannot access that counter variable.

// const add1 = counter();
// console.log(add1()); // 1 or 4?

// console.log(add(), add1());

// ---------------------------------------------
// Very similar to classes and private variables.

// function ClassName() {
//   let privateVar = "privateValue";
//   let publicVar = "";
//   function privateFn() {}
//   function publicFn() {
//     console.log(privateVar);
//   }
//   return {
//     publicVar: publicVar,
//     publicFn: publicFn,
//   };
// }

// const obj = ClassName();
// console.log("ClassName() =", obj);
// obj.publicFn();
// console.log(obj.privateVar);

// ---------------------------------------------------------------------------------------
// Currying

// const addFn = function (a, b, c) {
//   return a + b + c;
// };

// const addFnCurrying = function (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// };

// const arrowAddFnCurrying = a => b => c => a + b + c;

// console.log("addFn(1, 2, 3) =", addFn(1, 2, 3));
// console.log("addFnCurrying(1)(2)(3) =", addFnCurrying(1)(2)(3));
// console.log("arrowAddFnCurrying(1)(2)(3) =", arrowAddFnCurrying(1)(2)(3));

// ---------------------------------------------
// Converting addEventListener to currying style for reusablility

// const changeFontSize = element => {
//   element.style.fontSize = "50px";
// };
// const changeBackgroundColor = element => {
//   element.style.backgroundColor = "blue";
// };
// const myAddEventListener = element => event => callback => {
//   element.addEventListener(event, () => callback(element));
// };
// // Add multiple different event handlers to the button for reusability
// const registerButtonHandler = myAddEventListener(document.getElementById("button"));
// registerButtonHandler("click")(changeFontSize);
// registerButtonHandler("click")(changeBackgroundColor);

// ---------------------------------------------------------------------------------------
// ES5 Issues

// var items = document.querySelectorAll(".item");
// NOTE: Using var in a for-loop is not advised! var has a global scope, so by the end of the for loop, all instances of var are the same.
// for (var i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     console.log("You clicked on button # " + i);
//   });
// }

// var i =0, ... 5
// user clicks after the for loop ends
// event handler function has reference to global var i

// How to fix this with IIFE?
// for (var i = 0; i < items.length; i++) {
//   (function (i) {
//     items[i].addEventListener("click", function () {
//       console.log("You clicked on button # " + i);
//     });
//   })(i);
// }

// How to fix with ES6 let?
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     console.log("You clicked on button # " + i);
//   });
// }

// --------------------------------------------
// Explanation: var vs let
// https://stackoverflow.com/questions/59170277/javascript-understanding-let-scope-inside-for-loop

// for (var i = 0; i < items.length; i++) {
//   items[i].addEventListener('click', function () {
//     console.log('You clicked on button # ' + i);
//   });
// }

/* ES5
Global EC contains the var i.
Each iteration, add an event listener.
When invoked, local EC has i that is assigned a value based on the scope chain.
It ends up using the global EC var i=5.
*/

// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     console.log("You clicked on button # " + i);
//   });
// }

/* ES6
Global EC doesn't have i.
Each iteration, ES6 compiler redeclares block-scoped let i using the previous iteration's i value + 1, and adds the event listener.
When invoked, local EC has i that is assigned a value based on the scope chain.
It uses the block-scoped let i = 0, 1, ...
*/
