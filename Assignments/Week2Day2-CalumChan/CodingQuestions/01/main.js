// Given a url “https://jsonplaceholder.typicode.com/users", send a GET request to display
// the data on the page in a table. Errors should be handled properly.
// - Do this with fetch and XHR.

const table = document.getElementById("myTable");
const xhrBtn = document.getElementById("xhrBtn");
const fetchBtn = document.getElementById("fetchBtn");

// XHR
xhrBtn.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send(); // Send the request over the network

  // Called after the response is received
  xhr.onload = function () {
    console.log("Received response. xhr =", xhr);
    if (xhr.status != 200)
      console.log(`Error: ${xhr.status} : ${xhr.statusText}`); // Error
    else {
      // Success
      console.log("xhr.response =", xhr.response);
      const res = JSON.parse(xhr.response);
      console.log("JSON.parse(xhr.response) =", res);
      displayData(res);
    }
  };
  // This is called if there was an error making or sending the request.
  xhr.onerror = function () {
    console.log("Request failed");
  };
  // This is called while we're waiting for the response.
  xhr.onprogress = function (event) {
    console.log(`Received ${event.loaded} bytes`);
  };
});

// Fetch
fetchBtn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error(`Error: Status ${response.status}`);
    })
    .then((data) => {
      displayData(data);
    })
    .catch((error) => console.log(error));
});

// Takes in array of objects
function displayData(arr) {
  // Adds arr to Table
  for (let data of arr) {
    addData(data);
  }

  // Add New Row to Table
  function addData(obj) {
    let row = document.createElement("tr");
    // Add Data to Row
    for (let key in obj) {
      let col = document.createElement("td");
      if (key === "address") {
        col.innerHTML =
          obj[key].street +
          ", " +
          obj[key].suite +
          ", " +
          obj[key].city +
          ", " +
          obj[key].zipcode;
      } else if (key === "company") col.innerHTML = obj[key].name;
      else col.innerHTML = obj[key];
      row.appendChild(col);
    }
    table.appendChild(row); // Add Row to Table
  }
}
