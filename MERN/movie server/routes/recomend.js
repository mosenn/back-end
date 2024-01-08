const recomendRouter = require("express").Router();
const { getRecomend } = require("../controller/recomend");

//* get recomend

recomendRouter.get("/recomend", getRecomend);

module.exports = recomendRouter;
