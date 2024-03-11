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
    { name: "Karen Michaels", age: 20, favoriteFoods: ["fries", "chicken", "burritos"] },
    {
      name: "Ibrahim Gates",
      age: 26,
      favoriteFoods: ["potatoes", "fish", "broccoli"],
    },
    { name: "David Nelson", age: 34, favoriteFoods: ["shrimp", "rice", "chicken"] },
    { name: "Brian Michaels", age: 20, favoriteFoods: ["hamburger", "eggs"] },
    {
      name: "Wilson Daniels",
      age: 28,
      favoriteFoods: ["rice", "chicken", "peas", "burritos"],
    },
    { name: "Larry Anthony", age: 36, favoriteFoods: ["potatoes", "beef", "burritos"] },
    { name: "Wendy Sandra", age: 39, favoriteFoods: ["Crab", "fries"] },
    { name: "Sam Michaels", age: 23, favoriteFoods: ["bananas", "beef"] },
    { name: "Karen Michaels", age: 32, favoriteFoods: ["oyster", "bananas", "chicken"] },
    { name: "Isaac Shah", age: 35, favoriteFoods: ["chicken", "pasta", "kales"] },
    { name: "Esther Hillary", age: 26, favoriteFoods: ["sphagetti", "beef"] },
    {
      name: "Cole Keith",
      age: 37,
      favoriteFoods: ["rice", "chicken", "spinach", "burritos"],
    },
    { name: "Cindy Joel", age: 23, favoriteFoods: ["apple pie", "yoghurt"] },
    { name: "Bruce Jackson", age: 33, favoriteFoods: ["bacon", "fish", "rice"] },
    { name: "David Nelson", age: 34, favoriteFoods: ["tomato pie", "chicken"] },
    { name: "Rita Rose", age: 29, favoriteFoods: ["hamburger", "fries"] },
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
    favoriteFoods: ["pizza", "pasta"],
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
  
 // Find distinct names containing "Michaels"
Person.distinct("name", { name: /Michaels/ })
.then((people) => {
  console.log('Unique names containing "Michaels":', people);
})
.catch((err) => {
  console.error(err);
});
const food = "Fries"; // Example food to search for

// Find a person with the specified food in their favorites
Person.findOne({ favoriteFoods: food })
  .then((person) => {
    if (person) {
      console.log(`Person with ${food} in favorites:`, person);
    } else {
      console.log(`No person found with ${food} in favorites.`);
    }
  })
  .catch((err) => {
    console.error(err);
  });
  const personId = '65ef33e85c2acbeaecbcf332'; // Example personId to search for

  // Validate the _id value
  if (!mongoose.Types.ObjectId.isValid(personId)) {
    console.log(`Invalid personId: ${personId}`);
    return;
  }
  
  // Find a person by id
  Person.findById(personId)
    .then((person) => {
      if (person) {
        console.log(`Person with id ${personId}:`, person);
      } else {
        console.log(`No person found with id ${personId}.`);
      }
    })
    .catch((err) => {
      console.error(err);
    });

  const personName = "Karen Michaels"; // Example personName to search for

// Find a person by name and update their age
Person.findOneAndUpdate(
  { name: personName }, // Search criteria
  { age: 20 }, // Update age to 20
  { new: true } // Return the updated document
)
  .then((updatedPerson) => {
    if (updatedPerson) {
      console.log(`Updated person with name ${personName}:`, updatedPerson);
    } else {
      console.log(`No person found with name ${personName}.`);
    }
  })
  .catch((err) => {
    console.error("Error updating person:", err);
  });

  // Async function for removing a person
async function main() {
  try {
    // Your existing code goes here
    const removedPerson = await Person.findOneAndDelete({
      _id: "65ef3614752fc494c6c42ec6",
    });
    console.log(
      `Removed person with id 65ef3614752fc494c6c42ec6:`,
      removedPerson
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example: Delete all documents where the age is greater than 30
Person.deleteMany({ age: { $gt: 30 } })
  .then((result) => {
    console.log(`${result.deletedCount} documents deleted.`);
  })
  .catch((err) => {
    console.error("Error deleting documents:", err);
  });

  async function fetchData() {
    try {
      const data = await Person.find({ favoriteFoods: 'burritos' })
                                .sort({ name: 1 })
                                .limit(2)
                                .select('-age')
                                .exec();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  
  fetchData();
  
  

main()
// Start the Express server
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
