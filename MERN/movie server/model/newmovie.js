const mongoose = require("mongoose");

const newMovieSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  endDate: {
    type: String,
  },
});

const newMovieModel = mongoose.model("newmovie", newMovieSchema);

module.exports = newMovieModel;
