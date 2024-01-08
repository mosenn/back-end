// const { Router } = require("express");
// const router = new Router();

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  allUser,
} = require("../controller/user");

const { protect } = require("../middleware/auth");
//? this way can add multiple route in one line
// router.route("/").post(registerUser).get(allUser);

//!API get
//*FOR SEARCH WITH QUERY USERS
router.get("/", protect, allUser);
//!API POST
//*USERS TO DATABASE+
router.post("/registerUsers", registerUser);
//*LOGIN USERS
router.post("/loginUser", loginUser);

module.exports = router;
