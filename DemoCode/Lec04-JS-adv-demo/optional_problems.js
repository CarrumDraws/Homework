// 1. What is the output of this code?
var dataObj = {
  data: "xyz",
  functionA: function () {
    var self = this;
    console.log("outer function: this.data = " + this.data);
    console.log("outer function: self.data = " + self.data);
    (function () {
      console.log("inner function: this.data = " + this.data);
      console.log("inner function: self.data = " + self.data);
    })();
  }
};
dataObj.functionA();

// 2. What is the output of this code and why?
var x = 1;
var fn = function () {
  console.log(x);
  var x = 2;
};
fn();

// 3. What is the output of this code and why?
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();

// 4. What is the output of this code and why?
(function (x) {
  return (function (y) {
    console.log(y);
  })(2);
})(1);

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// 5. What is the output of this code and why?
var user = {
  _name: 'Username1',
  printName: function () {
    console.log(this._name);
  }
};
var printName = user.printName;
printName();
user.printName();

var user2 = {
  _name: 'Username2',
  printName2: () => {
    console.log(this._name);
  }
};
var printName2 = user2.printName2;
printName2();
user2.printName2(); 