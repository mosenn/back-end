const mongoose = require("mongoose");

// Make sure to capitalize 'String' as it's the correct type in Mongoose
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  languageCode: {
    type: String,
  },
  // Define role with enum
  role: {
    type: String,
    enum: ["user", "admin"],
  },
});

// Compile the schema into a model
const User = mongoose.model("User", userSchema);

module.exports = User;
