const commentUsersRouter = require("express").Router();
const { getCommentUser } = require("../controller/commentUser");

//* get recomend

commentUsersRouter.get("/commentUser", getCommentUser);

module.exports = commentUsersRouter;
