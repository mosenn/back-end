const routerUserIntract = require("express").Router();

const {
  toggelLikePost,
  getLikes,
  toggelSavePost,
  getSave,
} = require("../controller/userInteraction");

routerUserIntract.post("/likedPost/:postId", toggelLikePost);

routerUserIntract.post("/savedPost/:postId", toggelSavePost);
routerUserIntract.get("/likes/:postId", getLikes);
routerUserIntract.get("/saves/:postId", getSave);

module.exports = routerUserIntract;
