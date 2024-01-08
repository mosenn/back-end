const mongoose = require("mongoose");

const recomendSchema = new mongoose.Schema({
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

const recomendModel = mongoose.model("recomend", recomendSchema);

module.exports = recomendModel;
