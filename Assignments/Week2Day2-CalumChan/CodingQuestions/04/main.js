var items = document.querySelectorAll(".item");

// Original Code
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    console.log("You clicked on button # " + i);
  });
}

// The issue is that you're using var! Because var is globally scoped, incrementing "i" actually increments it for each button, meaning no matter which button you choose it prints 3.

// ES5 Fix
// Use an IIFE! IIFE's have their own scope.
// for (var i = 0; i < items.length; i++) {
//   (function (index) {
//     items[index].addEventListener("click", function () {
//       console.log("You clicked on button # " + index);
//     });
//   })(i);
// }

// ES6 Fix
// Use Let instead!
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     console.log("You clicked on button # " + i);
//   });
// }
