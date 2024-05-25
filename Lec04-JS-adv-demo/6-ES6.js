// --------------------------------------------------------------------------------------
// Array Destructuring

// // ES5: Store elements in variables
// const arr1 = [1, 3, 5];
// const n1 = arr1[0];
// const n2 = arr1[1];
// const n3 = arr1[2];
// console.log(n1, n2, n3);

// // ES6
// const [num1, num2, num3] = arr1;
// console.log(num1, num2, num3);
// // num1, num2, num3 are still consts
// // num1 = 2;

// -------------------------------------------
// Use destructuring to swap elements

// let first = 100;
// let second = 1;

// Only because first/second are declared with let
// [second, first] = [first, second];

// console.log(`first=${first}
// second=${second}`);

// --------------------------------------------------------------------------------------
// Object Destructuring

// const user = {
//   firstName: 'Name',
//   say: function () {
//     return `hi`;
//   },
//   devices: {
//     phone: 'iphone',
//     laptop: 'macbook pro'
//   }

// };

// const { firstName, say: greetings, devices, devices: { laptop } } = user;

// console.log("firstName =", firstName);
// console.log("greetings =", greetings);
// console.log("devices =", devices);
// console.log("laptop =", laptop);

// say is not being used
// console.log("say =", say);

// --------------------------------------------------------------------------------------
// Spread operator

// Add elements
// const arr3 = ['a', 'b', 'c'];
// const arr4 = [0, ...arr3, 10];
// console.log("arr4 =", arr4);

// Shallow copy
// const arr3Copy = [...arr3];
// console.log("arr3Copy =", arr3Copy);

// const nestedObj = [{ name: "Name1" }, { name: "Name2" }];
// const copyNested = [...nestedObj];
// copyNested[0].name = "Minwoo";
// console.log("nestedObj =", nestedObj);
// console.log("copyNested =", copyNested);

// Concatenate arrays
// const firstHalf = ['this', 'is'];
// const secondHalf = ['a', 'string'];
// const arr5 = [...firstHalf, ...secondHalf];
// console.log("arr5 =", arr5);

// Add entries
// const myObj = { a: 1, b: 3 };
// const newObj = { c: 5, ...myObj };
// console.log("newObj =", newObj);

// Copy and update an entry
// const updatedObj = { ...newObj, c: 10 };
// console.log("updatedObj =", updatedObj);

// --------------------------------------------------------------------------------------
// Rest operator

// const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
// console.log("rest =", rest);

// Must have matching property names
// const { first, ...restObj } = { first: 1, second: 2, third: 3, fourth: 4 };
// console.log("first =", first);
// console.log("restObj =", restObj);

// function printArray(...theArgs) {
//   console.log("theArgs =", theArgs);
// }

// printArray(1, 2, 3, 4, 5, 6, 7);

// --------------------------------------------------------------------------------------
// Enhanced Object Literals

// // ES5
// const firstName = 'Name';
// const user = {
//   firstName: firstName,
//   greeting: function greeting() {
//     console.log('hi');
//   }
// };

// // ES6
// const user1 = {
//   firstName,
//   greeting() {
//     console.log('hi');
//   }
// };

// console.log("user =", user);
// console.log("user1 =", user1);

// -------------------------------------------
// Computed property name as a key when defining object

// const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const openingHours = {
//   [weekdays[0]]: "OPEN",
// };
// console.log("openingHours =", openingHours);

// // Practical use-case: Convert array of strings to keys in an object
// const closedHours1 = {};
// weekdays.forEach((day) => (closedHours1[day] = "CLOSED"));
// console.log("closedHours1 =", closedHours1);

// // Use array reduce, spread operator, arrow function implicit to make it cleaner
// const closedHours2 = weekdays.reduce(
//   (obj, day) => ({ ...obj, [day]: "CLOSED" }),
//   {}
// );
// console.log("closedHours2 =", closedHours2);

// --------------------------------------------------------------------------------------
// Default arguments

// Regular arguments
// const addTen = function (a, b, c = 10) {
//   return a + b + c;
// };
// console.log("addTen(1, 2) =", addTen(1, 2));
// console.log("addTen(1, 2, 20) =", addTen(1, 2, 20));
// console.log("addTen(1, 2, undefined) =", addTen(1, 2, undefined));
// console.log("addTen(1, 2, null) =", addTen(1, 2, null));

// Default value for object property
// const printObject = function ({ username, address, language = 'JS' }) {
//   console.log(`${username} lives in ${address}, uses ${language}.`);
// };
// printObject({
//   username: 'User1',
//   address: 'NJ'
// });

// printObject({
//   username: 'User1',
//   address: 'NJ',
//   language: "Java"
// });

// -------------------------------------------------------------------------------------
// Generators

// function* genFn() {
//   let i = 1;
//   console.log(`First yield: ${i}`);
//   yield i; // pause execution, yield 1
//   i++;
//   console.log(`Second yield: ${i}`);
//   yield i; // pause execution, yield 2
//   i++;
//   console.log(`Last yield: ${i}`);
//   yield i; // pause execution, yield 3, not done
// }

// const generator = genFn(); // doesn't execute code in genFn()
// console.log("genFn() =", generator); // suspended

// console.log("generator.next() =", generator.next()); // execute until first yield
// console.log("generator.next() =", generator.next());
// console.log("generator.next() =", generator.next());
// console.log("genFn() =", generator); // suspended

// console.log("generator.next() =", generator.next()); // finish
// console.log("genFn() =", generator); // closed

// ------------------------------------------
// Passing values into .next()

// function* genFn() {
//   let nextArg = yield "First yield";
//   console.log(`nextArg = ${nextArg}`);
// }

// const generator = genFn();
// console.log("generator.next() =", generator.next());
// console.log("generator.next() =", generator.next("Apples"));
