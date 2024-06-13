// Given a url “https://jsonplaceholder.typicode.com/users", send a GET request to display
// the data on the page in a userTable. Errors should be handled properly.
// - Do this with fetch and XHR.

let form = document.getElementById("getUser");
const userTable = document.getElementById("userTable");
const postsTable = document.getElementById("postsTable");
const todosTable = document.getElementById("todosTable");

// Returns a Promise
// Note: fetch and response.json() are promises
function allData(id) {
  // Fetch only rejects the promise if there is a NETWORK ERROR...
  const promise1 = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => {
    // ...catch other errors (invalid input, etc) with response.ok (200's network response).
    if (!response.ok) {
      throw new Error("User was not found. Please try another user ID."); // Propegate an error- Throw it -> Catch it
    }
    return response.json();
  });
  const promise2 = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("User was not found. Please try another user ID.");
    }
    return response.json();
  });
  const promise3 = fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("User was not found. Please try another user ID.");
    }
    return response.json();
  });

  return Promise.all([promise1, promise2, promise3]);
}

// Submit Handler
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form); // Create FormData object
  allData(formData.get("userID"))
    .then((data) => {
      displayData(data);
    })
    .catch((error) => console.log(error));
});

// Displays data to appropriate tables
function displayData(arr) {
  // Adds arr to Table
  addUserData(arr[0]);
  addPostData(arr[1]);
  addTodoData(arr[2]);

  // Add to User Table
  function addUserData(obj) {
    let row = document.createElement("tr");
    let map = {
      id: 0,
      name: 1,
      username: 2,
      email: 3,
      address: 4,
      phone: 5,
      website: 6,
      company: 7,
    };
    let colArr = [];

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

      colArr[map[key]] = col;
    }
    colArr.forEach((ele) => row.appendChild(ele)); // Append cols to row
    userTable.appendChild(row); // Add Row to Table
  }

  // Add to Post Table
  function addPostData(arr) {
    for (let i = 0; i < arr.length; i++) {
      makeRow(arr[i]);
    }

    function makeRow(obj) {
      let row = document.createElement("tr");
      let map = {
        id: 0,
        title: 1,
        body: 2,
      };
      // Add Data to Row
      let colArr = [];
      for (let key in obj) {
        let col = document.createElement("td");
        col.innerHTML = obj[key];
        colArr[map[key]] = col;
      }
      colArr.forEach((ele) => {
        row.appendChild(ele);
      });

      postsTable.appendChild(row); // Add Row to Table
    }
  }

  // Add to Todo Table
  function addTodoData(arr) {
    for (let i = 0; i < arr.length; i++) {
      makeRow(arr[i]);
    }

    function makeRow(obj) {
      let row = document.createElement("tr");
      let map = {
        id: 0,
        title: 1,
        completed: 2,
      };
      // Add Data to Row
      let colArr = [];
      for (let key in obj) {
        let col = document.createElement("td");
        col.innerHTML = obj[key];
        colArr[map[key]] = col;
      }
      colArr.forEach((ele) => {
        row.appendChild(ele);
      });

      todosTable.appendChild(row); // Add Row to Table
    }
  }
}
