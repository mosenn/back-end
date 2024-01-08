const { compare } = require("../middleware/bcrypt");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken");
//*Register user
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
    const foundUser = await userModel.findOne({ username });
    if (foundUser) {
      errors.username = "this user before register";
    }
    const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    console.log("Register User : ", users);
    return res.status(201).json(users);
  } catch (err) {
    err?.inner?.forEach((e) => {
      errors[e.path] = e.message;
    });
    return res.status(400).json(errors);
  }
};
//* login  User
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    console.log(passowrdIsOky);
    if (passowrdIsOky) {
      const userToken = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          pic: user.pic,
        },
        process.env.JWT_SECRET,
        {}
      );

      return res
        .status(200)
        .cookie("userToken", userToken, {
          secure: "false",
          sameSite: "none",
        })
        .json({
          id: user._id,
          username,
          pic: user.pic,
        });
    } else {
      throw "err";
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json("user or password is worng");
  }
};
//* For set profile user (Online user)
const profileUser = async (req, res) => {
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      return res.status(200).json(user);
    }
  } catch (err) {
    console.log("profile user err", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

const logoutUser = async (req, res) => {
  try {
    return res.cookie("userToken", "").status(200).json("user is logout");
  } catch (err) {
    console.log("logout controll err", err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  profileUser,
  logoutUser,
};
