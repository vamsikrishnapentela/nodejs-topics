const express = require('express');
const app = express();

const PORT = 3000; // define port here

app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

// Start server
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});