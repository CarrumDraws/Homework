// --------------------------------------------------------------------------------------
// Prototype chain

// const arr = [1, 2, 2]; // array literal syntax, creates new Array, arr is instantiated object
// console.log(
//   "arr.__proto__ === Array.prototype =",
//   arr.__proto__ === Array.prototype
// );
// console.log(
//   "arr.__proto__.__proto__ === Object.prototype =",
//   arr.__proto__.__proto__ === Object.prototype
// );
// console.log(
//   "arr.__proto__.__proto__.__proto__ =",
//   arr.__proto__.__proto__.__proto__
// );

// Accessing a property on arr will look at that object, then the Array prototype,
// then its prototype(Object), then its prototype(null), and stop

// Extending features of a prototype, like arrays to have a method to convert to sets
// Array.prototype.toSet = function () {
//   console.log("Array.prototype.toSet this =", this);
//   return new Set(this);
// };
// console.log(arr.toSet());

// --------------------------------------------------------------------------------------
// Class (ES6)

// Good practice: name these with upper-case first letter!
// class Person {
//   constructor(firstname, address) {
//     this.firstname = firstname;
//     this.address = address;
//   }
//   say() {
//     console.log("class Person say() this =", this);
//     console.log(`My name is ${this.firstname}, I live in ${this.address}`);
//   }
// }
// const p1 = new Person('Ethan', 'NJ');
// p1.say();
// console.log("p1.__proto__ === Person.prototype", p1.__proto__ === Person.prototype);

// --------------------------------------------------------------------------------------
// Constructor functions (ES5)

// Good practice: name these with upper-case first letter!
// const Person = function (firstname, address) {
//   console.log("Constructor function invoked by new Person(), this =", this);
//   this.firstname = firstname;
//   this.address = address;
// };

// Person.prototype.say = function () {
//   console.log("Person.prototype.say() this =", this);
//   console.log(`My name is ${this.firstname}, I live in ${this.address}`);
// };

// console.log("Person.prototype =", Person.prototype);
// // -------------------------------------------
// // Instantiating an object
// const p1 = new Person("Ethan", "NJ");
// const p2 = new Person("Eric", "NY");
// console.log("p1 =", p1);

// // Calling the instance methods after new Person(), which links the prototype to the object
// p1.say();
// p2.say();

// // .__proto__ is a property of an instantiation, linked to the constructor .prototype
// // .prototype is a property of the class or constructor
// console.log(
//   "p1.__proto__ === Person.prototype =",
//   p1.__proto__ === Person.prototype
// );
// console.log("p1 instanceof Person =", p1 instanceof Person);

// // .hasOwnProperty() is used on the instantiated object
// Person.prototype.language = "English";
// console.log("p1.language =", p1.language);
// console.log("p1.hasOwnProperty('language') =", p1.hasOwnProperty("language"));
// console.log("p1.hasOwnProperty('address') =", p1.hasOwnProperty("address"));

// --------------------------------------------------------------------------------------
// Static methods

// let arr = [];
// console.log("arr.prototype =", arr.prototype); // undefined
// console.log("arr.__proto__ =", arr.__proto__); // Array Prototype
// console.log(Object.getOwnPropertyNames(arr.__proto__)); // Properties/Methods of the array prototype

// class PersonES6 {
//   constructor(firstname, address) {
//     this.firstname = firstname;
//     this.address = address;
//   }

//   // Instance method
//   introduce() {
//     console.log(`Hi, my name is ${this.firstname}`);
//   }

//   static say() {
//     console.log("hi");
//   }
// }

// console.log(
//   "PersonES6.prototype =",
//   Object.getOwnPropertyNames(PersonES6.prototype) // Access public properties like so
// );
// console.log("PersonES6.prototype =", PersonES6.prototype); // Empty Obj

// -------------------------------------------
// const PersonES5 = function (firstname, address) {
//   this.firstname = firstname;
//   this.address = address;
// };
// PersonES5.say = function () {
//   console.log("hi");
// };

// console.log("PersonES5.prototype =", PersonES5.prototype);
// PersonES5.say();

// --------------------------------------------------------------------------------------
// Inheritance

// class PersonES6 {
//   constructor(firstname, address) {
//     this.firstname = firstname;
//     this.address = address;
//   }
//   say() {
//     console.log(`My name is ${this.firstname}, I live in ${this.address}`);
//   }
// }

// class StudentES6 extends PersonES6 {
//   constructor(firstname, address, year) {
//     // super does the .call()
//     super(firstname, address);
//     this.year = year;
//   }
// }

// console.log(
//   "Class StudentES6 extends PersonES6, StudentES6.prototype =",
//   StudentES6.prototype
// );

// const studentES6 = new StudentES6("Ethan", "NJ", "4");
// studentES6.say();

// -------------------------------------------
// console.log("-------------------------------------------");

// const PersonES5 = function (firstname, address) {
//   this.firstname = firstname;
//   this.address = address;
//   console.log(this); // PersonES5
// };
// PersonES5.prototype.say = function () {
//   console.log(`My name is ${this.firstname}, I live in ${this.address}`);
// };

// let newPerson = new PersonES5();

// console.log(PersonES5.say());
// const StudentES5 = function (firstname, address, year) {
//   // execute the parent constructor, where 'this' refers to the student
//   // student will be initialized with parent properties
//   PersonES5.call(this, firstname, address);
//   this.year = year;
// };

// console.log("StudentES5.prototype =", StudentES5.prototype);

// StudentES5.prototype = Object.create(PersonES5.prototype);
// console.log(
//   "Assigned Person prototype, StudentES5.prototype =",
//   StudentES5.prototype
// );

// const studentES5 = new StudentES5("Ethan", "NJ", "4");
// studentES5.say();

// Update the copy of the parent prototype, so that the constructor initializes all the correct student properties
// StudentES5.prototype.constructor = StudentES5;
// console.log(
//   "Assigned Student constructor, StudentES5.prototype =",
//   StudentES5.prototype
// );

// // Student wants customized behavior for say method => update the method on the prototype
