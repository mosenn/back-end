const userRoute = require("express").Router();
const { AccessTokenGithub } = require("../controller/githubLogin");
userRoute.get("/getAccessToken", AccessTokenGithub);
module.exports = userRoute;
