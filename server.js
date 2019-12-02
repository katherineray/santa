const express = require("express");
const app = express();
const router = require("./routes/router");
const postRoutes = require("./routes/posts");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5001;
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

app.use(router);
app.use(postRoutes);
app.post("/login", req => console.log(req));

mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
