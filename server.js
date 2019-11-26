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

<<<<<<< HEAD
mongodb.connect(process.env.MONGODB_URI || process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  module.exports = client.db()
  const app = require('./app')
  app.listen(process.env.PORT, test => console.log("listening!"))

})
=======
app.use(express.static("public"));

app.use(router);
app.use(postRoutes);
app.post("/login", req => console.log(req));
>>>>>>> ee4d28bbf8c8d679a9d5d531584765809fca440a

mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
