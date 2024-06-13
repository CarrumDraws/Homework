// 1. What is the output of this code?
var dataObj = {
  data: "xyz",
  functionA: function () {
    var self = this;
    console.log("outer function: this.data = " + this.data); // prints xyz: this refers to dataObj
    console.log("outer function: self.data = " + self.data); // prints xyz: self also refers to dataObj
    (function () {
      console.log("outer function: this.data = " + this.data); // prints undefined: this now refers to the global object (this.data is undefined). IIFE's create their own scope- so this is essentially a nested keyword function, and nested keyword functions refer to the global object.
      console.log("outer function: self.data = " + self.data); // prints xyz: self still refers to dataObj- it's value is a pointer to a memory address and 'self's' value hasn't changed.
    })();
  },
};
dataObj.functionA();

// 2. What is the output of this code and why?
var x = 1;
var fn = function () {
  console.log(x); // This is undefined
  var x = 2; // var x gets hoisted up above console.log(x) in the function, but its value isn't defined yet.
  // Therefore, its value is undefined.
};
fn();

// // (The above fn can be interpreted as this)
// var fn = function () {
//   var x;
//   console.log(x);
//   var x = 2;
// };

// 3. What is the output of this code and why?
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3; // This redecleration of var overwrites all previous declerations- so the previous b's don't matter
    console.log(b); // 3
  }
  inner();
}
outer();

// inner() can be rewritten like so
// function inner() {
//   var b;
//   b++; // Does nothing since b isnt a number yet
//   var b = 3;
//   console.log(b); // 3
// }

// 4. What is the output of this code and why?
(function (x) {
  // IIFE's execute immediately.
  // So by returning an IIFE, you are essentially returning what the IIFE returns, not the IIFE itself.
  return (function (y) {
    console.log(y); // Prints 2 : Nothing is returned, just console.logged.
  })(2);
})(1); // This outer 1 doesn't change the output as x isn't used anywhere.

(function (x) {
  return (function (y) {
    console.log(x); // Prints 1 : Same logic as above, but utilizes x variable instead of y variable
  })(2);
})(1);

// 5. What is the output of this code and why?
var user = {
  _name: "Username1",
  printName: function () {
    console.log(this._name);
  },
};
var printName = user.printName; // printName is a function reference. You aren't triggering the function through the user object. Triggering fucntions this way causes 'this' to refer to the global object.
printName(); // prints undefined: the global object lacks a ._name property
user.printName(); // prints Username1: You are triggering the printName function directly from user. 'this' refers to the user object, and user.__name is 'Username1'

var user2 = {
  _name: "Username2",
  // Similar to the above, but uses an arrow fucntion instead of a keyword function. Arrow functions don't create thier own scope- therefore the 'this' keyword accesses the global variable regardless of the way printName2 is invoked. Since the global variable lacks a .__name value, both invokations print undefined.
  printName2: () => {
    console.log(this._name);
  },
};
var printName2 = user2.printName2;
printName2(); // Prints undefined
user2.printName2(); /// Prints undefined
