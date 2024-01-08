const mongoose = require("mongoose");
const { hash } = require("../middleware/bcrypt");
const userValidation = require("../middleware/userValidation");
const { object } = require("yup");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
});

//*validation
userSchema.statics.userValidation = (reqBody) => {
  return userValidation.validate(reqBody, { abortEarly: false });
};

//*hash passwird
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //*new update for hasing most be get this in model
  const { hashPassword, hashConfirmPassword } = await hash(
    this.password,
    this.confirmPassword
  );
  this.password = hashPassword;
  this.confirmPassword = hashConfirmPassword;
});
const userModel = mongoose.model("userRegister", userSchema);

module.exports = userModel;
