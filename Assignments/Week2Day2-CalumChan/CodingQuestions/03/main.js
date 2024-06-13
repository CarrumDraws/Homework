// Implement a function delayedRequest(url) that retrieves data from the specified url and outputs it to the console after 2 seconds.
// Test it with any of the “https://jsonplaceholder.typicode.com/users" urls

function delayedRequest(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error(`Error: Status ${response.status}`);
    })
    .then((data) => {
      setTimeout(() => {
        console.log(data);
      }, 2000);
    })
    .catch((error) => console.log(error));
}

// delayedRequest("https://jsonplaceholder.typicode.com/users/1");

// ----- Correct Way to Do It

function setTimeoutPromise(url) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error(`Error: Status ${response.status}`);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          resolve("Done");
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    }, 2000);
  });
}

// setTimeoutPromise("https://jsonplaceholder.typicode.com/users/1");

// "Create promise with setTimeout";
function returnTrue(callback) {
  setTimeout(() => {
    console.log("Executed");
    callback(true);
  }, 2000);
}

returnTrue((result) => {
  console.log("Callback received:", result);
});
