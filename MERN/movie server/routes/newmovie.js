const newMovieRouter = require("express").Router();
const { getNemovie } = require("../controller/newmovie");
newMovieRouter.get("/newmovie", getNemovie);

module.exports = newMovieRouter;
