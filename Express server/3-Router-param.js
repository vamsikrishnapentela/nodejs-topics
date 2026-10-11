// major change
//   const userId = req.params.id;
// Parameters are dynamic values in the URL.
//Identify a specific resource
//Format  ===>    /users/:id → /users/10
//Example ======>   /product/123

const express = require("express");
const app = express();

// Route with parameter
app.get("/users/:id", (req, res) => {
  // Extracting the parameter
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
