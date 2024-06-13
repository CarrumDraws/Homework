// ---------------------------------------------------------------------------------------
// Selecting DOM element nodes via querySelector, giving us NodeLists

// var nodeList = document.querySelectorAll("li");
// console.log("document.querySelectorAll('li') =", nodeList);
// for (var i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "yellow";
// }

// var li = document.querySelector("li");
// console.log("document.querySelector('li') =", li);
// li.style.backgroundColor = "red";

// ---------------------------------------------------------------------------------------
// Selecting DOM element via getElementBy, giving us HTML collections

// var idFirst = document.getElementById("first");
// console.log("document.getElementById('first') =", idFirst);
// idFirst.style.fontSize = "30px";

// var p1Elements = document.getElementsByClassName("p1");
// console.log("document.getElementsByClassName('p1') =", p1Elements);
// p1Elements[0].innerHTML = "Hello World!";

// ---------------------------------------------------------------------------------------
// Adding & removing event listeners to & from an element

// function displayDate() {
//   document.getElementById("date").innerHTML = Date();
// }
// function alertClicked() {
//   alert("Clicked button!");
// }

// var myBtn = document.getElementById("myBtn");
// myBtn.onclick = displayDate;

// // onclick can only refer to one event listener
// myBtn.onclick = alertClicked;

// // addEventListener can add multiple listeners to the same event
// myBtn.addEventListener("click", displayDate);
// myBtn.addEventListener("click", alertClicked);

// myBtn.removeEventListener("click", displayDate);

// ---------------------------------------------------------------------------------------
// Accessing the properties of the element that triggered an event with e.target

// var p = document.getElementsByTagName("p")[0];
// p.addEventListener("mousedown", function (e) {
//   console.log("e =", e);
//   console.log("e.target =", e.target);
//   e.target.style.backgroundColor = "red";
// });
// p.addEventListener("mouseup", function (e) {
//   e.target.style.backgroundColor = "white";
// });

// ---------------------------------------------------------------------------------------
// Accessing DOM element attributes

// var li = document.getElementsByTagName("li");
// console.log("li =", li);
// console.log("li[0].innerText =", li[0].innerText);
// console.log("li[1].parentNode =", li[1].parentNode);
// console.log("li[0].parentNode.children =", li[0].parentNode.children);

// ---------------------------------------------------------------------------------------
// Event Propagation: root -> capturing -> target element -> bubbling -> root
// .addEventListener: Third argument boolean: trigger the event during capturing or not (default: false)

// var useCapturing = false; // Toggles bubbling order
// document.getElementById("div1").addEventListener(
//   "click",
//   (e) => {
//     console.log(`${useCapturing ? "Capturing" : "Bubbling"}: click div1`);
//     // e.stopPropagation();
//   },
//   useCapturing
// );
// document.getElementById("div2").addEventListener(
//   "click",
//   (e) => {
//     console.log(`${useCapturing ? "Capturing" : "Bubbling"}: click div2`);
//     // e.stopPropagation();
//   },
//   useCapturing
// );
// document.getElementById("div3").addEventListener(
//   "click",
//   (e) => {
//     console.log(`${useCapturing ? "Capturing" : "Bubbling"}: click div3`);
//     // e.stopPropagation();
//   },
//   useCapturing
// );

// ---------------------------------------------------------------------------------------
// Event Delegation: Adding event listeners to a parent element to handle similar logic in all children elements, which is triggered by bubbling.

// Goal: when i click any square, it should randomly change colors

// var random = (number) => Math.floor(Math.random() * number);

// var container = document.getElementById("container");

// container.addEventListener("click", (e) => {
//   console.log("e.target =", e.target);
//   //   container.style.backgroundColor = `rgb(${random(255)}, ${random(
//   //     255
//   //   )}, ${random(255)})`;
//   e.target.style.backgroundColor = `rgb(${random(255)}, ${random(
//     255
//   )}, ${random(255)})`;
// });

// ---------------------------------------------------------------------------------------
// Prevent a form from submitting with e.preventDefault().

// var form = document.getElementById("signin");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form.elements =", form.elements);
//   var data = {
//     username: form.elements["username"].value,
//     password: form.elements["password"].value,
//   };
//   console.log(data);
// });

// ---------------------------------------------------------------------------------------
// Using JS to dynamically create and remove DOM elements based on input fields.

var fruitUl = document.getElementById("fruit");
var fruits = ["Apple", "Banana", "Orange"];
console.log("Hello");
fruits.forEach((fruit) => {
  // create elements and set their content to the fruit name
  var fruitLi = document.createElement("li");
  fruitLi.innerHTML = fruit;
  fruitUl.appendChild(fruitLi);
});

var form = document.getElementById("addFruit");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // create the element and set its content to the input field value
  var node = document.createElement("li");
  node.innerHTML = form.elements["fruitname"].value;
  // add it to the list
  fruitUl.appendChild(node);
  // reset our input field
  document.getElementById("fruitname").value = "";
});

// // BONUS: click to delete a fruit

fruitUl.addEventListener("click", function (e) {
  e.target.remove();
});
