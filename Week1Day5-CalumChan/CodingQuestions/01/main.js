function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

// Keyword Functions
function add2(num1) {
  return function add2_2(num2) {
    return function add2_3(num3) {
      return num1 + num2 + num3;
    };
  };
}

// Arrow Functions
function add3(num1) {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
}

// Arrow Functions Concise
// In concise arrow function syntax (No Curly Braces), the expression following the arrow is implicitly returned.
const add4 = (num1) => (num2) => (num3) => num1 + num2 + num3;

console.log(add(1, 2, 3));
console.log(add2(1)(2)(3));
console.log(add3(1)(2)(3));
console.log(add4(1)(2)(3));
