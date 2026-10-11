// Middleware are functions that run between the request (client) and the response (server).
// They can read, modify, validate, or even stop requests before they reach the final route.
// Think of middleware as checkpoints in a road:
// Request (car) passes through many checkpoints (middleware).
// At the end, it reaches the final destination (response).

const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("This runs before every request:", req.method, req.url);
  next(); // move to next middleware/route
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => console.log("Server running on port 3000"));

// req.method → tells which HTTP method the client used.
// Example: GET, POST, PUT, DELETE

// req.url → tells which path (route) the client is trying to access.
// Example: /about, /products/10, /search?name=apple

// eg prints Method: GET, URL: /about
