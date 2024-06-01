const express = require("express");
const app = express();

// built-in middleware for serving static files
// Static File : File that lacks server-side processing, and is served to an HTTP client (such as a web browser) exactly as it is stored on a server's file system
app.use(express.static("public"));

// start the server and listen on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
