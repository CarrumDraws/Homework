"use strict";
// 2. Write a function that takes an array of objects and a key name and
// returns a new array with the objects sorted by the value of the specified key.
function sortObj(arr, key) {
    // Check to make sure our input is valid
    if (arr.length === 0)
        return arr;
    if (arr[0][key] === undefined || arr[0][key] === null)
        throw new Error("Key Not Found in Array");
    arr = arr.sort((a, b) => {
        // arr.sort's function must return a Number!
        if (a[key] < b[key])
            return -1;
        if (a[key] > b[key])
            return 1;
        return 0;
    });
    return arr;
}
let arr = [
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "Alice", age: 25 },
];
console.log(sortObj(arr, "name"));
