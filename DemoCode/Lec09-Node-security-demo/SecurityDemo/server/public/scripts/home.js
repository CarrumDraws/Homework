const domain = "https://localhost:3000";
document.getElementById("signup").addEventListener("click", () => {
  const url = `${domain}/user/register`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "post request", email: "post@gmail.com" }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      location.href = "/";
    });
});

const login = document.getElementById("login");
const logout = document.getElementById("logout");
if (login)
  login.addEventListener("click", () => {
    const url = `${domain}/user/login`;
    fetch(url, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        location.href = "/";
      });
  });
else
  logout.addEventListener("click", () => {
    const url = `${domain}/user/logout`;
    fetch(url, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        location.href = "/";
      });
  });

/* 
SSR- navgiate to a page, browser sends a GET request
browser attaches cookies on every request

CSR- your script sends GET requests => can attach what you want
*/
