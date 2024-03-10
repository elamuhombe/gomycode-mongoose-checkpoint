// Import required modules
const express = require("express"); // Express framework
const mongoose = require("mongoose")// Mongoose
const Person = require('./models/Person'); // Person model schema
require("dotenv").config(); // Load environment variables

// Create Express app
const app = express();
const PORT = 5000; // Port for server to listen on
const MONGO_URI = process.env.MONGO_URI; // MongoDB connection URI

// Array of people data
const arrayOfPeople = [
    { name: "Karen Michaels", age: 20, favoriteFoods: ["Fries", "Chicken"] },
    {
      name: "Ibrahim Gates",
      age: 26,
      favoriteFoods: ["Potatoes", "Fish", "Broccoli"],
    },
    { name: "David Nelson", age: 34, favoriteFoods: ["Shrimp", "Rice"] },
    { name: "Brian Michaels", age: 20, favoriteFoods: ["Burger", "eggs"] },
    {
      name: "Wilson Daniels",
      age: 28,
      favoriteFoods: ["Rice", "Chicken", "Peas"],
    },
    { name: "Larry Anthony", age: 36, favoriteFoods: ["Potatoes", "Beef"] },
    { name: "Wendy Sandra", age: 39, favoriteFoods: ["Crab", "Fries"] },
    { name: "Sam Michaels", age: 23, favoriteFoods: ["Bananas", "Beef"] },
    { name: "Karen Michaels", age: 32, favoriteFoods: ["Oyster", "Bananas"] },
    { name: "Isaac Shah", age: 35, favoriteFoods: ["Chicken", "Pasta", "Kales"] },
    { name: "Esther Hillary", age: 26, favoriteFoods: ["Sphagetti", "Beef"] },
    {
      name: "Cole Keith",
      age: 37,
      favoriteFoods: ["Rice", "Chicken", "Spinach"],
    },
    { name: "Cindy Joel", age: 23, favoriteFoods: ["Apple Pie", "Yoghurt"] },
    { name: "Bruce Jackson", age: 33, favoriteFoods: ["Bacon", "Fish", "Rice"] },
    { name: "David Nelson", age: 34, favoriteFoods: ["Tomato Pie", "Chicken"] },
    { name: "Rita Rose", age: 29, favoriteFoods: ["Burger", "Fries"] },
  ];

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
// Create several people with Model.create(), using the arrayOfPeople data
Person.create(arrayOfPeople)
.then(createdPeople => {
    console.log('Several people created:', createdPeople);
})
.catch(err => {
    console.error(err);
});
  
  
// Start the Express server
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
  