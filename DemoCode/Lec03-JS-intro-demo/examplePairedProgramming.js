// Leetcode: Valid Parentheses #20

// Pseudocode
// stack? opening curly {, [, (
// push to stack, reach closing and check with top element. if matching, pop it
// if doesnt match, return false
// object key-value to pair opening and closing

var isValid = function (s) {
  var stack = [];
  var obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  // iterate through string, with index
  for (var i = 0; i < s.length; i++) {
    // console.log(`current character: ${s[i]}`, stack);
    // access character s[i], check if it's opening and push to stack
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      stack.push(s[i]);
    } else {
      if (s[i] != obj[stack.pop()]) {
        // its closing, pop top element and key into the object, check if matches current character
        return false;
      }
    }

  }

  // check if stack is empty? meaning they're valid and return true; else return false;
  return stack.length == 0 ? true : false;
};

// Testing ------------------------------------------------------------------------

// Input: s = "()";
// Output: true
// Example 2:

// Input: s = "()[]{}";
// Output: true
// Example 3:

// Input: s = "(]";
// Output: false;


var inputs = {
  1: "()",
  2: "()[]{}",
  3: "(]"
};

// Change [1,2,3] to whatever test cases you want based on the inputs object.
[1, 2, 3].forEach(key => console.log(`#${key}: ${inputs[key]}`, isValid(inputs[key])));