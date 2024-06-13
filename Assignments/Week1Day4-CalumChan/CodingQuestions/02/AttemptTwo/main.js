let form = document.getElementsByTagName("form")[0];
let tbody = document.getElementsByTagName("tbody")[0];

// let submitButton = document.getElementById("submitButton");

// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(form.da); // how to access form data?
// });

let initData = [
  { name: "M&M", category: "Snacks", price: "$1.99" },
  { name: "Table", category: "Furnature", price: "$199" },
];

for (let i = 0; i < initData.length; i++) {
  let data = new FormData();
  for (let key in initData[i]) {
    data.append(key, initData[i][key]);
  }
  addData(data);
}

// Access data with form.addEventListener("submit")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form); // FormData ?
  addData(data);
});

function addData(formData) {
  // Can only access formData values with .forEach??
  let tr = document.createElement("tr");
  formData.forEach((value, key) => {
    let td = document.createElement("td");
    td.innerHTML = value;
    tr.append(td);
  });
  let td = document.createElement("td");
  let delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.addEventListener("click", () => {
    tr.remove();
  });
  td.append(delBtn);
  tr.append(td);
  tbody.append(tr);
}
