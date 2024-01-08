const userRoute = require("express").Router();
const {
  registerUser,
  loginUser,
  profileUser,
  logoutUser,
} = require("../controller/user");

//* POST create user (register user)
userRoute.post("/register", registerUser);
//* POST login user
userRoute.post("/login", loginUser);
//* Get user online with cookie ( jwt user token)
userRoute.get("/profile", profileUser);
//* logout
userRoute.post("/logout", logoutUser);

module.exports = userRoute;