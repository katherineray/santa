const Post = require("../models/Post");

// Then run a request with axios to the OMDB API with the movie specified

//Import Routes
const postRoute = require("./routes/posts");

app.use("/post", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("This is making sense");
});