const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const router = require("./router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

app.use(bodyParser.json());

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var results = [" "];

// Then run a request with axios to the OMDB API with the movie specified

//Import Routes
const postRoute = require("./routes/posts");

app.use("/post", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("This is making sense");
});

// Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

//How to start listening to the server
app.listen(3000);

module.exports = app;
