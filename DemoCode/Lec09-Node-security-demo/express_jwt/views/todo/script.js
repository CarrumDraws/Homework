const BASE_URL = 'http://localhost:3000/api/todo';

// check if user is logged in
const token = window.localStorage.getItem('token');
const username = window.localStorage.getItem('username');
const isLoggedIn = username !== null;

if (!isLoggedIn) {
  alert('Please Login First');
  window.location.href = '/';
} else {
  fetch(BASE_URL, {
    headers: {
      // This is how you should append tokens into headers
      Authorization: `Bearer ${token}`,
    },
    // this is for including the cookies in the request
    credentials: 'include',
  })
    .then((res) => {
      if (!res.ok) {
        alert('Error Getting Todo');
        return;
      }
      return res.json();
    })
    .then(({ title }) => {
      document.getElementById('title').innerText = title;
    })
    .catch((err) => {
      alert(err.message);
    });
}
