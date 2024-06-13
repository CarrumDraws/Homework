// const btn = document.getElementById("xhrBtn");

// When clicked, send a request and display the response on the webpage.
// Get data from https://jsonplaceholder.typicode.com
// btn.addEventListener("click", function () {
//   // 1. Create a new XMLHttpRequest object
//   const xhr = new XMLHttpRequest();
//   // 2. Configure the request with open(HTTP request method, url)
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
//   // xhr.open("GET", "https://jsonplaceholder.typicode.com/todosasd/1");
//   // 3. Send the request over the network
//   xhr.send();

//   // 4. This callback will be called after the response is received
//   xhr.onload = function () {
//     console.log("Received response. xhr =", xhr);
//     if (xhr.status != 200)
//       // When there request sent out successfully but there's an issue.
//       console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
//     else {
//       console.log("xhr.response =", xhr.response);
//       const res = JSON.parse(xhr.response);
//       console.log("JSON.parse(xhr.response) =", res);
//       const xhrP = document.getElementById("xhrP");
//       xhrP.innerText = `Title: ${res.title}`;
//     }
//   };

//   // This is called if there was an error making or sending the request.
//   xhr.onerror = function () {
//     console.log("Request failed");
//   };

//   // This is called while we're waiting for the response.
//   xhr.onprogress = function (event) {
//     console.log(`Received ${event.loaded} bytes`);
//   };
// });

// ------------------------------------------------------------------------------------
// XHR request without the comments and extra console logs

const btn = document.getElementById("xhrBtn");
btn.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200)
      console.log(`Error: Status ${xhr.status} ${xhr.statusText}`);
    else {
      const res = JSON.parse(xhr.response);
      const xhrP = document.getElementById("xhrP");
      xhrP.innerText = `Title: ${res.title}`;
    }
  };
  xhr.onerror = function () {
    console.log("Request failed");
  };
  xhr.onprogress = function (event) {
    console.log(`Received ${event.loaded} bytes`);
  };
});
