const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  itemId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  galleryUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);
