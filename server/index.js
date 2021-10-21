import {} from 'dotenv/config';
import express from "express";
// import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

// express  middlewares
app.use(express.json({limit:"30mb", extended:true }));
app.use(express.urlencoded({limit:"30mb", extended:true }));
// for some reason enabling this makes the server unresponsive. check back later
// app.use(cors);

// middlewares for routes

// for all post routes. comes from routes/posts.js
app.use("/posts", postRoutes);

app.get("/", (req,res) => {
    res.send("<h1>This is the localhost/ path</h1>");
});


// connect to mongodb and then start the server
const CONNECTION_URL = "mongodb+srv://"+USER+":"+PASSWORD+"@cluster0.ubtk0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console(error));



