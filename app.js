// Importing express
const express = require('express');
const app = express();

// Define a port to listen on
const PORT = 8080;

// Define a static data response
const staticData = {
  name: "Tanuja Pathania",
  age: 30,
  occupation: "Software Developer"
};

// Create an API route that sends static data
app.get('/api/static', (req, res) => {
  res.json(staticData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
