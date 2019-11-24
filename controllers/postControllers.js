const Post = require("../models/Post");

// Then run a request with axios to the OMDB API with the movie specified

//Import Routes
const postRoute = require("./routes/posts");

app.use("/post", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("This is making sense");
});

router.get("/", (req, res) => {
  res.send("I want suya");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    descrition: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/search", (req, res) => {
  axios
    .get(
      "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&RESPONSE-DATA-FORMAT=JSON&SECURITY-APPNAME=" +
        process.env.SANTA_API_KEY +
        "&REST-PAYLOAD&keywords=" +
        req.body.query
    )
    .then(function(response) {
      res.json(
        response.data.findItemsByKeywordsResponse[0].searchResult[0].item
      );
      //test.findItemsByKeywordsResponse[0].searchResult[0].item[0]
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
});

module.exports = router;
