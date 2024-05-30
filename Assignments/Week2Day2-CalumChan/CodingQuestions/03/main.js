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

delayedRequest("https://jsonplaceholder.typicode.com/users/1");
