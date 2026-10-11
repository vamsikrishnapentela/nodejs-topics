// In Express, query parameters are accessed using req.query.
// Format ====>  /users?id=10
// Purpose  ===>   Filter, sort, search, pagination
// Example ====> /products?category=shoes&sort=price



const express = require("express");
const app = express();
const PORT = 3000;

// after opeining server 3000 must use this and try.
// Example: http://localhost:3000/greet?name=Vamsi

app.get("/greet", (req, res) => {
  const name = req.query.name; // Extract "name" from URL
  res.send(`Hello, ${name}! Welcome 🚀`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
