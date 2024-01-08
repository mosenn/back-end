const postRouter = require("express").Router();
const {
  createPost,
  posts,
  userPost,
  deleteUserPost,
  editPost,
} = require("../controller/post");

postRouter.post("/createpost", createPost);
postRouter.get("/posts", posts);
postRouter.get("/userposts", userPost);
postRouter.delete("/deletepostuser/:id", deleteUserPost);
postRouter.put("/editpost/:id", editPost);
module.exports = postRouter;
