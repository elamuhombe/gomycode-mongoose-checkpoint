// Import required modules
const express = require("express"); // Express framework
const mongoose = require("mongoose")// Mongoose
const Person = require('./models/Person'); // Person model schema
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

// Create and Save a Record of a Model
const person1 = new Person({
    name: "John Doe",
    age: 33,
    favoriteFoods: ["Pizza", "Pasta"],
  });

person1
  .save()
  .then((data) => {
    console.log("New person saved:", data);
  })
  .catch((err) => {
    console.error(err);
  });
  
// Start the Express server
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
  