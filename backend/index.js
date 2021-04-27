//IMPORTS
import express from "express";
import mongoose from "mongoose";
import apiRoute from "./routes/api/apiRoute.js";
import cors from "cors";
import dotenv from "dotenv";
//Initializing dotenv for database connection
dotenv.config();
//Initializing the app
const app = express();

//Initializing MongoDB connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//Check connection
db.once('open', () =>{
    console.log("Connected to MongoDB");
})
//Adding body-parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())
//Routers
app.use('/api', apiRoute)

//Check for error
db.on('error', (err) => {
    console.log(err);
})
//Creating port variable from env variable or setting it mannualy

const PORT = process.env.PORT || 4000;


//Listening on the PORT variable and then console logging the port
app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})