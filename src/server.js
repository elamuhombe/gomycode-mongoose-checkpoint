// Import required modules
const express = require("express"); // Express framework
require("dotenv").config(); // Load environment variables

// Create Express app
const app = express();
const PORT = 5000; // Port for server to listen on


// Start the Express server
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
  