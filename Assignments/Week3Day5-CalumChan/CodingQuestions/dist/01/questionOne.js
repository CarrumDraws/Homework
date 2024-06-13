"use strict";
// 1. Write a function that takes an array of objects with a name property
// and returns a string with the names separated by commas and "and" before
// the last name.
function myFunc(names) {
    let str = "";
    for (let i = 0; i < names.length; i++) {
        str += names[i].name;
        if (1 < names.length && i < names.length - 1) {
            str += i === names.length - 2 ? " and " : ", ";
        }
    }
    return str;
}
let names = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(myFunc(names));
