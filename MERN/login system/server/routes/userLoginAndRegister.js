const loginRegisterRouter = require("express").Router();
const { register, login } = require("../controller/registerAndLoginUser");
const googleRecapcha = require("../controller/googelRecapcha");
const {
  accessTokenLinkedin,

  loginLikedin,
} = require("../controller/linkedin");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public", "uploads")); // Change the destination directory here
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
//*for local worked
// const upload = multer({
//   dest: "uploads/",
// });
//*for local worked

const upload = multer({ storage });
//
//*register
loginRegisterRouter.post("/register", upload.single("image"), register);

//*login
loginRegisterRouter.post("/login", login);
//*google recapcha
loginRegisterRouter.post("/recapcha", googleRecapcha);
//*linkedin for take code from url parmas
loginRegisterRouter.post("/accessTokenLinkedin", accessTokenLinkedin);

//*get user data linkedin
loginRegisterRouter.get("/signinLinkedin", accessTokenLinkedin);

//*login user linkedin
loginRegisterRouter.post("/loginLinkedin", loginLikedin);

module.exports = loginRegisterRouter;
