const { saveInfoUser } = require("../controller/user");

const user = require("express").Router();

user.post("/", saveInfoUser);

module.exports = user;
