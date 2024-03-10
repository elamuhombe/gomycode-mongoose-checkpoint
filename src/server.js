// Import required modules
const express = require("express"); // Express framework
const mongoose = require("mongoose")// Mongoose
require("dotenv").config(); // Load environment variables

// Create Express app
const app = express();
const PORT = 5000; // Port for server to listen on
const MONGO_URI = process.env.MONGO_URI; // MongoDB connection URI

// Connect to MongoDB database
async function connectToDatabase() {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Connected to database");
    } catch (error) {
      console.error("Error connecting to database", error.message);
    }
  }
  connectToDatabase();
  
// Start the Express server
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
  