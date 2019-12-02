const express = require("express");
const app = express();
const router = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5001;
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);
// mongodb.connect(process.env.MONGODB_URI || process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
//   module.exports = client.db()
//   const app = require('./app')
//   app.listen(process.env.PORT, test => console.log("listening!"))

// })

mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
