// Require the mongoose package for MongoDB operations
const mongoose = require('mongoose');

// Define the schema for the Person object using Mongoose
const personSchema = new mongoose.Schema({
  // Define the name field as a required string
  name: { type: String, required: true },
  
  // Define the age field as a number (optional)
  age: { type: Number },
  
  // Define the favoriteFoods field as an array of strings
  favoriteFoods: { type: [String] }
});

// Create the Person model using the defined schema
const Person = mongoose.model('Person', personSchema);

// Export the Person model to be used in other files
module.exports = Person;
