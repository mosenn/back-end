const topTenmovieRoute = require("express").Router();
const { getTopTenMovie } = require("../controller/toptenmovie");

//* get recomend

topTenmovieRoute.get("/toptenmovie", getTopTenMovie);

module.exports = topTenmovieRoute;
