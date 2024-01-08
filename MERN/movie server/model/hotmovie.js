const mongoose = require("mongoose");

const hotMovieSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },
  rank: {
    type: Number,
  },
});

const Moviemodel = mongoose.model("hotmovie", hotMovieSchema);

module.exports = Moviemodel;
