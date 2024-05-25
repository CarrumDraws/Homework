// ------------------------------------------------------------------------------------
// Scope: var is global, let/const is block

// if (true) {
//   var var1 = 'var value';
//   let var2 = 'let value';
//   const var3 = 'const value';
// }

// console.log(`var1 = ${var1}`);
// console.log(`var2 = ${var2}`);
// console.log(`var3 = ${var3}`);

// ------------------------------------------------------------------------------------
// Re-declaring: var can be re-declared, let/const cannot

// var var1 = 'first';
// var var1 = 'second';
// console.log(var1);

// let var2 = 'first';
// let var2 = 'second';

// const var3 = 'first';
// const var3 = 'second';

// ------------------------------------------------------------------------------------
// Needs initial value: only const

// var var1;
// let var2;
// const var3;

// ------------------------------------------------------------------------------------
// Can be re-assigned: only var/let, not const

// var var1;
// var1 = 1;

// let var2;
// var2 = 2;

// const var3 = 3;
// var3 = 4;

// ------------------------------------------------------------------------------------
// Mutation: cannot reassign const, but mutate properties if it's an object

// const var1 = [];
// var1.push("first");
// var1.push("second");
// console.log("var1 =", var1);

// const var2 = {};
// var2[1] = "first";
// var2[2] = "second";
// console.log("var2 =", var2);
