const messageRoute = require("express").Router();
const { userMessage } = require("../controller/Message");

messageRoute.get("/message/:userId", userMessage);

module.exports = messageRoute;
