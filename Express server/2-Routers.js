// Create → POST

// Read → GET

// Update → PUT/PATCH

// Delete → DELETE

const express = require("express");
const app = express();

// GET request
app.get("/", (req, res) => {
  res.send("Welcome to Home Page!");
});

// POST request
app.post("/login", (req, res) => {
  res.send("You are trying to login!");
});

// PUT request
app.put("/update", (req, res) => {
  res.send("Updating your details...");
});

// DELETE request
app.delete("/delete", (req, res) => {
  res.send("Deleting your account...");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
