const userModel = require("../model/user");
const { compare } = require("../middleware/bcrypt");

const register = async (req, res) => {
  const { email, password, confirmPassword, pic } = req.body;
  const messageError = [];
  // console.log(req.file, "req.file in register");
  try {
    //*validation register
    const validate = await userModel.userValidation(req.body);
    //*create user(register)
    // if (validate) {
    // }
    const checkEmail = await userModel.findOne({ email: req.body.email });
    if (checkEmail) {
      throw messageError.push("Email already exists");
    }
    const registerUser = await userModel.create({
      email,
      password,
      confirmPassword,
      pic,
    });
    return res.status(201).send(registerUser);
  } catch (err) {
    console.log(err, "err");
    // console.log(err.keyPattern, "err.keyPattern");
    // console.log(err.errors, "errors");
    //*error for same email(unique email in schema)
    if (messageError.length > 0) {
      console.log(err.errors, "in if messageError");
      return res.status(400).send([err.errors, messageError[0]]);
    }
    // if (err.keyPattern) {
    //   return res
    //     .status(400)
    //     .send([err.errors, "email has exist chose another email"]);
    // }
    console.log(err.errors);
    return res.status(400).send(err.errors);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await userModel.findOne({
      email,
    });
    console.log(login, "this login in login controller");
    const passwordIsOkey = await compare(password, login.password);

    console.log(passwordIsOkey, "passisoky");
    if (login && passwordIsOkey) {
      return res.status(200).send(login);
    }
    throw Error("email or password is worng");
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
};

module.exports = {
  register,
  login,
};
