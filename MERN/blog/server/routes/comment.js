const commentRouter = require("express").Router();

const { getCommentsByPost, createComment } = require("../controller/comment");
commentRouter.get("/comment/:postId", getCommentsByPost);
commentRouter.post("/comments", createComment);

module.exports = commentRouter;
