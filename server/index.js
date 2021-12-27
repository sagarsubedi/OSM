import {} from 'dotenv/config';
import express from "express";
// import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import createRoutes from "./routes/create.js";

const app = express();

// use this to connect to mongodb
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

// express  middlewares
app.use(express.json({limit:"30mb", extended:true }));
app.use(express.urlencoded({limit:"30mb", extended:true }));
// for some reason enabling this makes the server unresponsive. check back later
// app.use(cors);

// db connection
// connect to mongodb and then start the server
const CONNECTION_URL = "mongodb://localhost:27017/dev_OSM";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server with MongoDB running on port ${PORT}`)))
    .catch((error) => console.log(error));


// middlewares for routes
// for the root route 
app.get("/", (req,res) => {
    res.send("<h1>This is the localhost/ path</h1>");
});

// call to routes folder for all create requests
// except for get routes, all other routes should be protected for professors and admin only
app.use("/create", createRoutes);

// call to routes folder for all update requests

// call to routes forlder for all delete requests

// call to routes folder for all read/get requests



