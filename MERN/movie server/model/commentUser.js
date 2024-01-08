const mongoose = require("mongoose");

const commentUsersSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  score: {
    type: Number,
  },
  video: {
    type: String,
  },
});

const commentUsersModel = mongoose.model("commentUser", commentUsersSchema);

module.exports = commentUsersModel;
