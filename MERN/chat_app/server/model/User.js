const mongoose = require("mongoose");
const { hash } = require("../tools/bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  hash(this.password);
});
const User = mongoose.model("User", userSchema);

module.exports = User;
