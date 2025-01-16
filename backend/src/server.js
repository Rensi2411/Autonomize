const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the GitHub User API!');
});

// Add other API routes here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
