const mongoose = require("mongoose");

const topTenMovieSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  types: {
    types: [String],
  },
  imgHover: {
    type: String,
  },
  img: {
    type: String,
  },
});

const topTenMovieModel = mongoose.model("toptenmovie", topTenMovieSchema);

module.exports = topTenMovieModel;
