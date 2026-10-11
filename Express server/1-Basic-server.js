const express = require('express');
const app = express();

const PORT = 4000; // define port here

app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

// Start server
app.listen(PORT, () => {
  console.log(`express server running at http://localhost:${PORT}`);
});
