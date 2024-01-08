const mongoose = require("mongoose");

const linkedinSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
  },

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const linkdinModel = mongoose.model("usersLinkedin", linkedinSchema);

module.exports = linkdinModel;
