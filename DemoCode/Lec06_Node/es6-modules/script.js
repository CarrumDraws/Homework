// Importing/Exporting in a browser utilizes ES6 module syntax.
import fn, { someVar as val, obj } from "./utils.js";

console.log(fn);
console.log(val);
console.log(obj);

console.log(this); // undefined (ES modules are Strict Mode by default!)

// To use ES6 modules in Node.js, either use the .mjs extension or set "type": "module" in your package.json file.
