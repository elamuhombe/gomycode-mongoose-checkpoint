# Mongoose Setup and Usage Guide

This README file provides instructions on how to install and set up Mongoose for your project, as well as how to use it for basic database operations.

## Installing and Setting up Mongoose

To install and set up Mongoose, follow these steps:

1. Add MongoDB and Mongoose to your project's `package.json`.
2. Store your MongoDB Atlas database URI in the private `.env` file as `MONGO_URI`. Make sure to surround the URI with single or double quotes and avoid any spaces between the variable, `=`, and the value.
3. Connect to the database using the following syntax:

   ```javascript
   mongoose.connect(MONGO_URI);
   ```
Output in console
![dbConnect](https://github.com/elamuhombe/gomycode-mongoose-checkpoint/assets/10416177/955d7287-88d0-4236-978b-de1c5ede0753)

## Person Prototype

The person prototype includes the following fields:

- `name`: string [required]
- `age`: number
- `favoriteFoods`: array of strings


## Create and Save a Record of a Model

To create and save a record of a model, follow these steps:

1. Create a document instance using the Person constructor with the required fields (`name`, `age`, and `favoriteFoods`).
2. Call the method `document.save()` on the returned document instance and pass a callback using the Node convention.

   ```javascript
   person.save(function(err, data) {
     // ...do your stuff here...
   });

   Output
   ![recordOne](https://github.com/elamuhombe/gomycode-mongoose-checkpoint/assets/10416177/eb74c05f-5390-4082-9472-c20db23599b8)
 ```

## Create Many Records with `model.create()`

To create many records using `model.create()`, provide an array of objects as the first argument and save them all in the database.

Output
![severalPeople](https://github.com/elamuhombe/gomycode-mongoose-checkpoint/assets/10416177/b1fcc820-47b9-4af2-9605-0b5bb826ff09)


## Use `model.find()` to Search Your Database

Find all the people with a given name using `Model.find()`.
Example: Find all the people with name 'Michaels'

Output
![givenName](https://github.com/elamuhombe/gomycode-mongoose-checkpoint/assets/10416177/710e4c1d-d1a1-453d-a96c-a2f828200e32)


## Use `model.findOne()` to Return a Single Matching Document

Find just one person who has a certain food in their favorites using `Model.findOne()`.

## Use `model.findById()` to Search Your Database By `_id`

Find the person with a given `_id` using `Model.findById()`.

## Perform Classic Updates by Running Find, Edit, then Save

Find a person by `_id`, add "hamburger" to their `favoriteFoods`, and save the updated Person.

## Perform New Updates on a Document Using `model.findOneAndUpdate()`

Find a person by name and set their age to 20 using `model.findOneAndUpdate()`.

## Delete One Document Using `model.findByIdAndRemove`

Delete one person by their `_id` using `model.findByIdAndRemove()`.

## MongoDB and Mongoose - Delete Many Documents with `model.remove()`

Delete all the people whose name is “Mary” using `Model.remove()`.

## Chain Search Query Helpers to Narrow Search Results

Find people who like burritos, sort them by name, limit the results to two documents, and hide their age by chaining search query helpers like `find()`, `sort()`, `limit()`, `select()`, and then `exec()`.

For more detailed information and examples, refer to the Mongoose documentation.
