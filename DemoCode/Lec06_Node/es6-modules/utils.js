// Global scope in a module works differently than in a script (outside of a module).
// The top-level scope is the module itself, NOT the global var (window).
// This means that our var moduleVar isn't being added to the window.

// var moduleVar = "moduleVar";
// console.log("window =", window);
// console.log("window.moduleVar =", window.moduleVar); // Undefined

// // Note: You can't directly access the module scope the same way you can access 'window' or 'global'.
// console.log(this); // Undefined
// // Just use them directly!
// console.log(moduleVar); // "moduleVar"

// ---------------------------------------------------------------------------------------

console.log("module.js has been imported");

export const someVar = 0;
export const obj = {
  1: 1,
  2: 2,
  3: 3,
};

// One export default
export default function () {
  console.log("Default export function");
}

// const val = 3
// export default val
