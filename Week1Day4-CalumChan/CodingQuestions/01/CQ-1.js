// Toggle color + visibility in each tab
function toggle(i) {
  for (let j = 0; j < tabs.children.length; j++) {
    tabs.children[j].style.backgroundColor =
      j === i ? "lightgrey" : "whitesmoke";
    body.children[j + 1].style.display = j === i ? "block" : "none";
  }
}

let tabs = document.getElementsByClassName("tab")[0];
let body = document.getElementsByTagName("body")[0];

toggle(0); // Toggle Initial Value

for (let i = 0; i < tabs.children.length; i++) {
  tabs.children[i].addEventListener("click", () => {
    toggle(i);
  });
}
