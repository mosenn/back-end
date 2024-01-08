const hotmoveRoute = require("express").Router();
const { getHotmovie } = require("../controller/hotmovie");
hotmoveRoute.get("/hotmovie", getHotmovie);

module.exports = hotmoveRoute;
