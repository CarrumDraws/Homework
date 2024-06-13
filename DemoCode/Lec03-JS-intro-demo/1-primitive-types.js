// ---------------------------------------------------------------------------------------
// Declaring Variables
// var str = "hello";
// var str2 = "'hello'";
// var integerNum = 20;
// var floatNum = 20.1;
// var booleanValue = true;
// var undefinedValue;
// var nullValue = null;

// console.log("undefinedValue:", undefinedValue);
// console.log("nullValue:", nullValue);

// ---------------------------------------------------------------------------------------
// Typeof

// console.log("typeof str:", typeof str);
// console.log("typeof str2:", typeof str2, str2);
// console.log("typeof integerNum:", typeof integerNum);
// console.log("typeof floatNum:", typeof floatNum);
// console.log("typeof booleanValue:", typeof booleanValue);
// console.log("typeof undefined:", typeof undefined);
// console.log("typeof null:", typeof null);

// ---------------------------------------------------------------------------------------
// Dynamic Typing

// var value = 10;
// console.log("typeof value:", typeof value, value);
// value = "change it to a string";
// console.log("typeof value:", typeof value, value);

// ---------------------------------------------------------------------------------------
// Type Coercion
// Strings can be concatenated with the '+' operator.
// When adding a string and num, it becomes a string. (Overloaded)
// console.log("'1' + 1 =", "1" + 1);
// console.log("1 + '1' =", 1 + "1");
// console.log("1 + '1' + 1 =", 1 + "1" + 1);
// console.log("1 + 1 + '1' =", 1 + 1 + "1");

// // With other operations, the rules are different... (Not Overloaded)
// // Turns to a num if possible
// console.log("'1' - 1 =", "1" - 1);
// console.log("'1' - '2' =", "1" - "2");
// console.log("'1' - 'hi' =", "1" - "hi", typeof ("1" - "hi"));
// console.log("'2' * '3' =", "2" * "3");
// console.log("1 / '3' =", 1 / "3");

// // true = 1, false = 0
// console.log("99 + true =", 99 + true);
// console.log("99 + false =", 99 + false);

// Type Conversion
// console.log("typeof Number('1'):", typeof Number('1'));
// console.log("typeof +'1':", typeof +'1');
// console.log("typeof +'hi':", typeof +'hi', +'hi');
// console.log("typeof +true:", typeof +true, +true);
// console.log("typeof +false:", typeof +false, +false);

// console.log("typeof String(2021):", typeof String(2021));

// console.log("typeof Boolean(1):", typeof Boolean(1), Boolean(1));
// console.log("typeof Boolean(0):", typeof Boolean(0), Boolean(0));

// ---------------------------------------------------------------------------------------
// Strings

// var str1 = 'Intro to JS',
//   str2 = new String('Intro to JS');
// console.log("typeof str1:", typeof str1);
// console.log("typeof str2:", typeof str2);

// Accessing characters in a string
// console.log(str1[0]);
// console.log(str1.charAt(0));

// Useful string properties/methods
// console.log(str1, "|", str1.length);
// console.log(str1, "|", str1.slice(5));
// console.log(str1, "|", str1.slice(0, 5));
// console.log(str1, "|", str1.slice(-5));

// console.log(str1, "|", str1.split(' '));
// console.log(str1, "|", str1.split('to'));

// console.log(str1, "|", str1.replace('o', 'O'));
// console.log(str1, "|", str1.replaceAll('o', 'O'));

// console.log('    hi, there!  '.trim());

// Immutability
// str1[0] = 'A';
// console.log(str1);
// console.log('A' + str1.slice(1));

// ---------------------------------------------------------------------------------------
// String Template Literals
// + operator for concatenation

// var name = 'Hello World';
// var combinedStr = 'My name is ' + name;
// console.log(combinedStr);
// console.log(`My name is ${name}`);

// var poem1 = "What \na \nbeautiful \nday";
// console.log(poem1);

// var poem2 = `What
// a
// beautiful
// day`;
// console.log(poem2);

// Only expressions in template strings
// console.log(`1>3 = ${1 > 3}`);

// Non-expressions cause errors
// console.log(`${var num = 0}`);
// console.log(`${ if (true) { console.log('hi'); } } `)

// ---------------------------------------------------------------------------------------
// Operators

// Mathematical
// console.log("1 + 2 =", 1 + 2);
// console.log("1 - 2 =", 1 - 2);
// console.log("1 / 2 =", 1 / 2);
// console.log("1 * 2 =", 1 * 2);
// console.log("5 % 2 =", 5 % 2);
// console.log("2 ** 10 =", 2 ** 10);

// var num = 2;
// num += 2;
// console.log("num += 2 ->", num);
// num = num + 2;
// console.log("num = num + 2 ->", num);

// Float
// console.log("0.1 + 0.2 =", 0.1 + 0.2); // float bug
// console.log("toFixed() =>", (0.1 + 0.2).toFixed(2));

// Max numbers
// console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
// console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

// -----------------------------------------
// Comparison
// console.log("4 > 3 =", 4 > 3);
// console.log("2 < 3 =", 2 < 3);
// console.log("4 >= 4 =", 4 >= 4);

// == vs ===
// console.log("100 == '100'", 100 == '100');
// console.log("0 == ''", 0 == '');
// console.log("0 == false", 0 == false);

// console.log("100 === '100'", 100 === '100');
// console.log("0 === ''", 0 === '');
// console.log("0 === false", 0 === false);

// console.log("undefined == null", undefined == null);
// console.log("undefined === null", undefined === null);

// console.log("9007199254740992 === 9007199254740993", 9007199254740992 === 9007199254740993); // overflow

// -----------------------------------------
// Boolean

// console.log("!true =", !true);
// console.log("true && true =", true && true);
// console.log("false && true =", false && true);
// console.log("true || false =", true || false);
// console.log("false || false =", false || false);

// Falsy values
// if ('' || 0 || undefined || null || NaN) {
//   console.log('this is true');
// } else {
//   console.log('this is false');
// }

// -----------------------------------------
// Short-circuit Evaluation

// Examples
// var v1 = 'value1' && true;
// console.log("'value1' && true =", v1);
// var v2 = false && 'value2';
// console.log("false && 'value2' =", v2);
// var v3 = true || 'value3';
// console.log("true || 'value3' =", v3);
// var v4 = false || 'value4';
// console.log("false || 'value4' =", v4);
// var temp = 'value6' && 'value7';
// console.log("'value6' && 'value7' =", temp);

// Exercise
// var v5 = (undefined || null || NaN || 0) && "value5";
// console.log("(undefined || null) =", undefined || null);
// console.log("(undefined || null) || NaN =", undefined || null || NaN);
// console.log(
//   "(((undefined || null) || NaN) || 0) =",
//   undefined || null || NaN || 0
// );
// console.log(
//   "(((undefined || null) || NaN) || 0) && 'value5' =",
//   (undefined || null || NaN || 0) && "value5"
// );

// var v6 = "value6" && ("" || null || "last");
// console.log("'value6' && ('' || null || 'last') =", v6);

// ---------------------------------------------------------------------------------------
// Flow Control

// If else
// var day = 4;
// var day = 6;
// var day = 10;
// if (day >= 1 && day <= 5) {
//   console.log('weekday');
// } else if (day >= 6 && day <= 7) {
//   console.log('weekend');
// } else {
//   console.log('the input is invalid');
// }

// If-else vs ternary operator
// var value = -10;
// var absoluteValue;

// if (value > 0) {
//   absoluteValue = value;
// } else {
//   absoluteValue = -value;
// }
// console.log(absoluteValue);

// absoluteValue = value > 0 ? value : -value;
// console.log(absoluteValue);

// -----------------------------------------
// Switch statement
// var fruittype = 'Oranges';
// // var fruittype = 'Apples';
// // var fruittype = 'Bananas';
// // var fruittype = 'Durian';
// switch (fruittype) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Apples':
//     console.log('Apples are $0.32 a pound.');
//     break;
//   case 'Bananas':
//     console.log('Bananas are $0.48 a pound.');
//     break;
//   default:
//     console.log(`Sorry, we are out of ${fruittype}.`);
// }

// -----------------------------------------
// For loop
// var arr = [1, 2, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// While loop
// var j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// };
