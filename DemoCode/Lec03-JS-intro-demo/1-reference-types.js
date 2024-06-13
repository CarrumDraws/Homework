// ---------------------------------------------------------------------------------------
// Objects

// var obj1 = {
//   name: 'Object 1',
//   id: 1,
//   greeting: function () {
//     console.log('hi there');
//   }
// };

// var obj2 = new Object({
//   name: 'Object 2',
//   id: 2,
//   greeting: function () {
//     console.log('hi there');
//   },
// });

// // Accessing properties with . []
// console.log("obj1.name =", obj1.name);
// console.log("obj1['name'] =", obj1['name']);
// obj1.greeting();

// // Computed property names
// var property = 'id';
// console.log("obj1[property] =", obj1[property]);

// -----------------------------------------
// Adding elements
// var obj3 = {};

// obj3[1] = "value1";
// obj3[1] = "value1 duplicate"; // duplicate key
// obj3[2] = "value2";
// obj3[3] = "value3";
// obj3[4] = "value4";
// obj3[5] = "value5";

// console.log("obj3", obj3);

// // check an object's size
// console.log("Object.keys(obj3) =", Object.keys(obj3), typeof Object.keys(obj3));
// console.log("Object.keys(obj3).length =", Object.keys(obj3).length);

// // check if an object has a key
// console.log("2 in obj3 =", 2 in obj3);

// // delete and check
// delete obj3[1];
// console.log("1 in obj3 after delete obj3[1] =", 1 in obj3);
// console.log(obj3);

// -----------------------------------------
// Iterating an object

// for (var key in obj3) {
//   console.log(`key: ${key},
//   obj3[key]:`, obj3[key]);
// }

// Cannot use "of" to iterate an object
// for (var key of obj3) {
//   console.log(key, obj3[key]);
// }

// Cannot use .forEach() to iterate an object
// obj3.forEach(val => console.log(val));

// Convert object keys, values, or both into an array that can be iterated
// With this, we can use for ... of, or .forEach()
// console.log("Object.keys(obj3) =", Object.keys(obj3));
// console.log("Object.values(obj3) =", Object.values(obj3));
// console.log("Object.entries(obj3) =", Object.entries(obj3));

// ---------------------------------------------------------------------------------------
// Primitive vs Reference Types

// Object comparison

// var obj1 = { val: 1 };
// var obj2 = { val: 1 };

// console.log("obj1 == obj2", obj1 == obj2);
// console.log("obj1 === obj2", obj1 === obj2);

// Determine equality by manually checking all properties (nested included)
// var isEqual = function (obj1, obj2) {
// };

// -----------------------------------------
// Copying

// var num = 1;
// var numCopy = num;
// numCopy = 999;
// console.log("num =", num);
// console.log("numCopy =", numCopy);

// var obj1 = { val: 1 };
// var objCopy1 = obj1;
// objCopy1.val = 999;
// console.log("obj1 =", obj1);
// console.log("objCopy1 =", objCopy1);

// var obj2 = { val: 1 };
// var objCopy2 = {};
// // SYNTAX: Object.assign(target, source)
// Object.assign(objCopy2, obj2);
// objCopy2.val = 999;
// console.log("obj2 =", obj2);
// console.log("objCopy2 =", objCopy2);

// -----------------------------------------
// Shallow copy vs Deep copy

// var user = {
//   name: 'User 1',
//   language: {
//     frontend: 'JS',
//     backend: 'Java'
//   }
// };

// var shallowCopy = {};
// Object.assign(shallowCopy, user);

// Shallow copy

// shallowCopy.name = 'User 2';
// shallowCopy.language.backend = 'C++';

// console.log("shallowCopy =");
// console.log(shallowCopy);
// console.log("user =");
// console.log(user);

// console.log("shallowCopy =", JSON.stringify(shallowCopy));
// console.log("user =", JSON.stringify(user));

// -----------------------------------------
// Deep copying

// var deepCopy = {}, languageCopy = {};
// Object.assign(deepCopy, user);
// Object.assign(languageCopy, user.language);
// deepCopy.language = languageCopy;

// deepCopy.name = 'User 2';
// deepCopy.language.backend = 'C++';
// console.log("deepCopy =", JSON.stringify(deepCopy));
// console.log("user =", JSON.stringify(user));

// ---------------------------------------------------------------------------------------
// Functions

// function f1(arg1) {
//   console.log(`Invoked f1(100), arg1=${arg1}`);
// }
// f1(100);

// var f2 = function () {
//   console.log('Invoked f2(), assigned a function to a variable');
// };
// f2();

// var arrowFn = () => {
//   console.log('Invoked arrowFn()');
// };
// arrowFn();

// -----------------------------------------
// ARROW FUNCTIONS ONLY!!!
// Implicitly return a single expression, does not need { } and 'return'

// var f3 = input => input * 10;
// console.log(`Invoked f3(2), omitting argument (), function body {}, and 'return': ${f3(2)}`);

// var f4 = (input1, input2) => input1 + input2;
// console.log(`Invoked f4(1,2), omitting function body {} and 'return': ${f4(1, 2)}`);

// var f5 = input => {
//   if (Number(input)) {
//     return 'input is a number';
//   } else {
//     return 'input is not a number';
//   }
// };
// console.log(`Invoked f5('has'): ${f5('has')}`);

// ---------------------------------------------------------------------------------------
// First-class function & Higher-order function
// add is higher-order because it takes in a function

// Pass a function argument
// var add = function (num1, num2, fn) {
//   fn(num1 + num2);
//   // print(1+2);
// };

// var print = function (num) {
//   console.log(num);
// };

// add(1, 2, print);

// -----------------------------------------
// Return a function
// fn1 is higher-order because it returns a function

// var fn1 = function (num1) {
//   return function (num2) {
//     return num1 + num2;
//   };
// };
// console.log("fn1(2) =", fn1(2));
// console.log("fn1(2)(3) =", fn1(2)(3));

// // var addTwo = fn1(2);
// // console.log("addTwo = fn1(2) =", addTwo);
// // console.log("addTwo(10) =", addTwo(10));

// ---------------------------------------------------------------------------------------
// Arrays

// Common array methods
// var arr1 = [1, 2, 'string', 9];
// var arr2 = new Array(1, 2, 3, 9);

// Converting things to an array
// console.log(Array.from('foo'));
// console.log(Array.from([1, 2, 3], (x) => x + x));

// Accessing elements
// console.log(`arr1[0] = ${arr1[0]}`);

// console.log(arr1.push('add to end'), arr1);
// console.log(arr1.unshift('add to front'), arr1);
// console.log(arr1.pop(), arr1);
// console.log(arr1.shift(), arr1);

// console.log(arr1.slice(2), arr1);

// SYNTAX: arr.splice(startIndex, deleteCount, item1, ..., itemN);
// console.log(arr1.splice(2, 1, 'new item'), arr1);

// console.log([1, 2, 3, 4, 5].join('-'));

// -----------------------------------------
// Iterating through an array

var arr3 = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr3.length; i++) {
//   console.log(arr3[i]);
// }

// for (var num of arr3) {
//   console.log(num);
// }

// SYNTAX: arr.forEach((num, index, arr) => {})
// arr3.forEach((num, index) => console.log(`${index}th element is ${num}.`));

// Not what you're expecting, so dont use "in" to iterate arrays, only for objects
// for (var num in arr3) {
//   console.log(num);
// }
// console.log(arr3);

// ---------------------------------------------------------------------------------------
// Using Array methods on a list of objects for real-world use cases

// var users = [
//   { id: 1, name: 'User1', gender: 'Male' },
//   { id: 2, name: 'User2', gender: 'Female' },
//   { id: 3, name: 'User3', gender: 'Female' },
// ];

// // Create a list of strings that contains each user's information.
// var userInfo = users.K(item => `My name is ${item.name}, my id is ${item.id}`);
// console.log(userInfo);

// // Find all female users.
// var allFemales = users.filter(item => item.gender === "Female");
// console.log(allFemales);

// // Find the first female user.
// var firstFemale = users.find(item => item.gender === 'Female');
// console.log(firstFemale);

// // Sort all users by id in descending order.
// var sortResult = users.sort((i1, i2) => i1.id - i2.id);
// console.log("users:", users);
// console.log("sortResult:", sortResult);
// console.log("sortResult == users", sortResult == users);

// // Sort all users by id in ascending order.
// users.sort((i1, i2) => i2.id - i1.id);
// console.log(users);

// // Find all female users and sort by name(ascending), then return a list of strings that contains each user's information.
// var sortedFemale = users
//   .filter(item => item.gender === 'Female')
//   .sort((i1, i2) => i1.name.localeCompare(i2.name))
//   .map(item => `My name is ${item.name}, my id is ${item.id}`);
// console.log(sortedFemale);

// ---------------------------------------------------------------------------------------
// Maps

// var map = new Map();

// adding elements
// map.set(1, "value1");
// map.set(1, "value1 duplicate"); // duplicate key
// map.set(2, "value2");
// map.set(3, "value3");
// map.set(4, "value4");
// map.set(5, "value5");

// console.log("map", map);
// console.log("map.size", map.size);
// console.log("map.has(2)", map.has(2));

// // delete and check
// map.delete(1);
// console.log("map.has(1) after map.delete(1)", map.has(1));

// // access an element
// console.log("map.get(3) =", map.get(3));

// Iterating a map
// for (const entry of map) {
//   console.log(entry);
// }

// map.forEach((value, key) => console.log(`value: ${value}
// key:${key}`));

// -----------------------------------------
// INSERTION ORDER: map vs object

// var obj = {};
// obj['3'] = "temp";
// obj['2'] = "temp";
// obj['1'] = "temp";

// console.log("obj =", obj);
// console.log("Object.entries(obj) =", Object.entries(obj));

// var map = new Map();
// map.set("3", "temp");
// map.set("2", "temp");
// map.set("1", "temp");

// console.log("map =", map);
// console.log("map.entries() =", map.entries());

// ---------------------------------------------------------------------------------------
// Sets

// var set = new Set();
// set.add(1);
// set.add(1); // duplicate
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);

// console.log("set", set);
// console.log("set.size", set.size);
// console.log("set.has(2)", set.has(2));

// // deleting
// set.delete(1);
// console.log("set.has(1) after set.delete(1)", set.has(1));

// // Iterating a set
// for (const item of set) {
//   console.log(item);
// }
// set.forEach((item, key) => console.log(`item:${item}, key:${key}`));

// // Create a set using an array to remove duplicates
// var arrSet = new Set([1, 1, 1, 1, 1, 1]);
// console.log(arrSet);
