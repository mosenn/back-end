const mongoose = require("mongoose");

const animationSerisSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  types: {
    type: [String],
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});

const animationSeriModel = mongoose.model(
  "animationSeris",
  animationSerisSchema
);

module.exports = animationSeriModel;
