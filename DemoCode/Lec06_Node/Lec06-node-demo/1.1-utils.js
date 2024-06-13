const name = "fan";
const add = function (a, b) {
  return a + b;
};

// Export
module.exports = {
  name,
  add,
};
console.log(module.exports); // 1 : { name: 'fan', add: [Function: add] }
