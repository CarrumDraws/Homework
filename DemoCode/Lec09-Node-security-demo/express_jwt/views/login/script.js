const BASE_URL = 'http://localhost:3000/api/user';

// check if user is logged in
const username = window.localStorage.getItem('username');
const isLoggedIn = username !== null;

if (isLoggedIn) {
  // if already logged in, redirect to home page
  window.location.href = '/';
}

// select needed elements
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const handleSubmit = (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      // must specify content-type if you used express.urlencoded() middleware
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        alert('Error Logging In');
        return;
      }
      return res.json();
    })
    .then(({ token }) => {
      // after login, set the token and username to the localStorage, you don't have to set the username in localStorage, it is just for display purposes
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('username', username);
    })
    .then(() => (window.location.href = '/')) // after setting everything in localStorage, redirect to home page
    .catch((err) => {
      alert(err.message);
    });
};

form.addEventListener('submit', handleSubmit);
