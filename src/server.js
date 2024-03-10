const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const app = express();
const PORT = 5000


const MONGO_URI = process.env.MONGO_URI;

async function connectToDatabase(){
    try{
        await mongoose.connect(MONGO_URI);
        console.log('Connected to database');
    }
    catch(error){
        console.error('Error connecting to database', error.message)
    }
}
connectToDatabase();
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})
