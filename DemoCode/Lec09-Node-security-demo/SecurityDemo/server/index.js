const app = require("./server");
const connection = require("./config/db");
const https = require("https");
const fs = require("fs");
const path = require("path");

// Make sure the database is connected before starting the HTTPS server
const port = process.env.PORT || 3000;
connection.once("open", () => {
  https
    .createServer(
      {
        key: fs.readFileSync(path.join(__dirname, "config", "server.key")),
        cert: fs.readFileSync(path.join(__dirname, "config", "server.cert")),
      },
      app
    )
    .listen(port, () => {
      console.log(`Server is up and running on: https://localhost:${port}`);
    });
});
