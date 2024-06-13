// ------------------------------------------------------------------------------------
// // What does a fetch response look like?
// const fetchResult = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log("fetchResult =", fetchResult); // Promise { <pending> } : fetchResult isn't resolved yet

// fetchResult.then((response) => {
//   console.log("response =", response); // Response {object} : The response to your request. Contains info like headers, status code, and body.
//   console.log("response.json() =", response.json()); // Promise { <pending> } : response.json() reads response stream + returns a promise that parses the response body. (This is an async operation)
// });

// // How do we actually get the data?
// fetchResult
//   .then((response) => response.json())
//   .then((data) => console.log(data)) // Wait for pesponse.json() to resolve to get the actual data!
//   .catch((error) => console.log(error));

// -----------------------------------------

// Handling response errors by looking at response HTTP status code.
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log("response =", response);
//     if (response.ok)
//       return response.json(); // response.ok checks if status code in 200 - 299
//     else throw new Error(`Error: Status ${response.status}`);
//     // .then() returns 'undefined' if no return specified.
//     // Non-promise values like 'undefined' are wrapped like 'Promise.resolve(undefined)'
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ------------------------------------------------------------------------------------
// When button is clicked, make an API request and display the response title on the webpage.
// Get data from https://jsonplaceholder.typicode.com

// const btn = document.getElementById("fetchBtn");
// btn.addEventListener("click", function () {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//       if (response.ok) return response.json();
//       else throw new Error(`Error: Status ${response.status}`);
//     })
//     .then((data) => {
//       const fetchP = document.getElementById("fetchP");
//       fetchP.innerText = `Title: ${data.title}`;
//     })
//     .catch((error) => console.log(error));
// });

// ------------------------------------------------------------------------------------
// Fetch POST request

// const btn = document.getElementById("fetchBtn");
// btn.addEventListener("click", function () {
//   const update = {
//     title: "Sample Title",
//     body: "sample body",
//     userId: 1,
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(update),
//     // JSON.stringify() covnerts JS object to JSON string.
//     // JSON.parse() covnerts JSON string to JS object.
//     // Use these two to deep-copy arrays or objects.
//   })
//     .then((response) => {
//       if (response.ok) return response.json();
//       else throw new Error(response.status);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });
