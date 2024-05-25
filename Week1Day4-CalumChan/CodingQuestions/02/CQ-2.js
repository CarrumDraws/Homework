let table = document.getElementById("myTable");
let form = document.getElementById("addProduct");

let initialData = [
  { name: "M&M", category: "Snacks", price: "$1.99" },
  { name: "Table", category: "Furnature", price: "$199" },
  { name: "Kale", category: "Vegetables", price: "$2.49" },
];

// Adds initialData to Table
for (let data of initialData) {
  // Convert initialData to FormData...
  var formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }
  addData(formData); // ...then add it
}

// Submit Handler
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form); // Create FormData object
  addData(formData);
});

// Add New Row to Table
function addData(formData) {
  let row = document.createElement("tr");

  // Add Data to Row
  formData.forEach((value, key) => {
    let col = document.createElement("td");
    col.innerHTML = value;
    row.appendChild(col);
  });

  // Add Delete Button to Row
  let col = document.createElement("td");
  let button = document.createElement("button");
  button.innerHTML = "Delete";
  button.addEventListener("click", (event) => {
    row.remove();
  });
  col.appendChild(button);
  row.appendChild(col);

  // Add Row to Table
  table.appendChild(row);
}
