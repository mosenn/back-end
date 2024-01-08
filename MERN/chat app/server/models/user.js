const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const Uservalidation = require("../validation/userValidation");
const userSchema = new mongoose.Schema(
  {
    //required: [true, "need name for account"]
    name: { type: String },
    email: {
      type: String,
      // required: [true, "set email for account"],
    },
    password: {
      type: String,
      // required: [true, "password cant be empty"],
    },
    confirmPassword: {
      type: String,
      // required: [true, "confirmPassword cant be empty"],
      // ref: "password",
      // validate: {
      //   validator: function (value) {
      //     return value === this.password;
      //   },
      //   message: "Password do not match",
      // },
    },
    pic: {
      type: String,
      // required: [true, "need profile picture pls set"],
      // default:
      //   "https://images.unsplash.com/photo-1680252111945-c80eabc8e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
  },
  {
    timestamps: true,
  }
);

//*
userSchema.statics.validationUsers = function (body) {
  return Uservalidation.validate(body, { abortEarly: false });
};

// ? pre mean before model saved do someting
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const BS = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, BS);
  this.confirmPassword = await bycrypt.hash(this.confirmPassword, BS);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
