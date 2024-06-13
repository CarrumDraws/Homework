// const { name, add } = require("./1.1-utils.js"); // Import
// console.log("hello world"); // 2

// console.log(this); // 3 : {} (this = {} at the top level of a CommonJS module)
// console.log(module); // 4 : { ... } (Module Metadata)
// console.log(global); // 5 : <ref *1> Object [global]

// console.log(name); // 6 : fan
// console.log(add(1, 1)); // 7 : 2

// ES Module : JS file that uses Javascript's Module System : Uses import and export
// CommonJS : A specification for a module system in JavaScript, primarily designed for server-side JavaScript environments like Node.js
// CommonJS Modules : The implementation of the CommonJS specification Uses require()/module.exports.
// Node.js Modules : Natively supports CommonJS modules, but starting Version 12, now supports ES Modules as well.

// this != module != module.exports (Confusing!!!)
