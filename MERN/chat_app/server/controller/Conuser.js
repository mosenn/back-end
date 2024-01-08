const User = require("../model/User");
const { sign, verify } = require("../tools/jwt");
const { compare } = require("../tools/bcrypt");
//*Login
const login = async (req, res) => {
  const { username, password } = req.body;
  // console.log(username, password, "in login route");
  try {
    const findUser = await User.findOne({ username });
    //password compare becrypt
    const passwordIsOkey = compare(password, findUser.password);
    if (findUser && passwordIsOkey) {
      const token = sign(findUser._id, findUser.username);
      res
        .cookie("token", token, { secure: true, sameSite: "none" })
        .status(201)
        .json({
          id: findUser._id,
          username: findUser.username,
          token: token,
        });
    }
  } catch (err) {
    console.log(err);
  }
};

//*Create user
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  // console.log("username:", username, "password:", password);

  try {
    const createUser = await User.create({ username, password });
    const token = sign(createUser._id, createUser.username);
    // console.log(token, "refactor token");
    // jwt.sign(
    //   { userId: createUser._id, name: createUser.username },
    //   "secret"
    // );
    res
      .cookie("token", token, {
        // httpOnly: true,
        secure: true,
        sameSite: "none",
        // maxAge: 90000000,
      })
      .status(201)
      .json({
        id: createUser._id,
        username: createUser.username,
        token: token,
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

//*User Profile
const userProfile = async (req, res) => {
  try {
    const token = req.cookies?.token;
    // console.log("token", token);
    if (token) {
      const decode = verify(token, "secret");
      // jwt.verify(token, "secret");
      return res.status(200).json(decode);
    } else {
      return res.status(404).json("token is not found");
    }
  } catch (err) {
    res.status(401).json({ err: err, message: "no token" });
  }
  //?----------- v-code
  // try {
  //   const token = req.cookies?.token;
  //   console.log(token, "token");
  //   if (token) {
  //     jwt.verify(token, "secret", {}, (err, userData) => {
  //       if (err) throw err;
  //       console.log(userData, "userdata");
  //       return res.status(200).json(userData);
  //     });
  //   } else {
  //     throw err;
  //   }
  // } catch (err) {
  //   res.status(401).json({ err: err, message: "no token" });
  // }
};

//*Check online user
const onlinePepole = async (req, res) => {
  const userOnline = await User.find({}, { _id: 1, username: 1 });
  return res.status(200).json(userOnline);
};

const logoutUser = async (req, res) => {
  res.cookie("token", "", { sameSite: "none", secure: true }).json("ok");
};

module.exports = { registerUser, userProfile, login, onlinePepole, logoutUser };
