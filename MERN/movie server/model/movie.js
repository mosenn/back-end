const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
    required: true,
  },
  types: {
    type: Array,
  },
});

const moviesModel = mongoose.model("movie", moviesSchema);

module.exports = moviesModel;
