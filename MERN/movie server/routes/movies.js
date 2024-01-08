const router = require("express").Router();
const { allMovies, animations } = require("../controller/movie");

//*get movies
router.get("/movies", allMovies);
//*get animations
router.get("/animations", animations);
module.exports = router;
