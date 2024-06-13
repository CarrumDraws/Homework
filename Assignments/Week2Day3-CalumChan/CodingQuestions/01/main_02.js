// Uses Syncronous Operations for Linear Code

const fs = require("fs");

let numbers = "";

// Generate Random Numbers
for (let i = 0; i < 100; i++) {
  let num = Math.floor(Math.random() * 100);
  numbers += num + (i == 99 ? "" : " ");
}

fs.writeFileSync("file.txt", numbers); // Writes to File

numbers = fs.readFileSync("file.txt").toString(); // Reads from File
console.log(numbers); // Print it out

// Sort numbers
numbers = numbers
  .split(" ")
  .sort((a, b) => {
    return a - b;
  })
  .join(" ");

fs.writeFileSync("file.txt", numbers); // Writes to File
