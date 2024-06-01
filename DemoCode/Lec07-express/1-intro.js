// express : A Node.js framework, designed for creating server-side apps and API's. Abstracts away the complexities of certain modules (Like the http, path, querystring modules). Builds upon these modules.
const express = require("express");

const app = express();

// app.use('path', (req, res) => { }) : Mounts middleware funcs at the specified path. If no path provided, triggers on every path. Used for adding middleware that gets executed for every server request.
// app.[HTTP Method]('path', (req, res) => { }) : Defines an endpoint
// app.all('path', (req, res) => { }) : Handle all HTTP Methods for a particular path. Good for 404 Pages
// app.listen(PORT, () => {}) : Starts server at PORT
// app.set('var', val) : Sets settings (like view engine)

// Parses incoming requests with JSON payloads
// Allows the reading of bodies
app.use(express.json());

// HTTP methods
app.get("/", (_req, res) => {
  res.send("GET");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.put("/", (req, res) => {
  res.send(req.body);
});
// PUT (Idempotent): Updates/Creates a new resource at the specified URI
// PATCH (Not Idempotent): Modifies a part of a resource instead of replacing it entirely
app.patch("/", (req, res) => {
  res.send(req.body);
});

app.delete("/", (_req, res) => {
  res.send("DELETE");
});

// Route Paths
app.get("/about", (_req, res) => {
  res.send("About");
});

// Route Parameters
app.get("/users/:userId/book/:bookId", (req, res) => {
  res.send(req.params);
});

// Search Query
app.get("/search", (req, res) => {
  res.send(req.query);
});

// Content Type
app.get("/content-type", (_req, res) => {
  // Changes HTTP headers in the response.
  res.setHeader("Content-Type", "text/plain"); // Content is PlainText
  // res.setHeader("Content-Type", "text/html"); // Content is HTML

  res.send("<html><body><h1>Index Page</h1></body></html>");
});

// res.write()
app.get("/write", (_req, res) => {
  res.write("Line 1\n"); // Streams data
  res.write("Line 2\n");
  res.write("Line 3\n");
  res.end(); // Ends data stream
});

// middlewares
const logger = (req, _res, next) => {
  console.log(req.method, req.url);
  next();
};

// use middleware on single route
app.get("/middleware", logger, (_req, res) => {
  res.send("Middleware");
});

// use middleware on all routes
// app.use(logger);

// Route definition order matters
app.get("/order", (_req, res) => {
  res.send("Order Matters");
});

// usage of *
app.all("*", (_req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

// start the server and listen on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
