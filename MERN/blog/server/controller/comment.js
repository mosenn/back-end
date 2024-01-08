const commentModel = require("../model/comment");
const createComment = async (req, res) => {
  try {
    const { comment, author, postId } = req.body;
    const newComment = await commentModel.create({
      comment,
      author,
      post: postId,
    });
    return res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
};

const getCommentsByPost = async (req, res) => {
  // console.log("postId for Comment", req.params.postId);
  try {
    if (req.params.postId && req.params.postId.trim().length > 0) {
      const comments = await commentModel
        .find({ post: req.params.postId })
        .populate("author");
      return res.status(200).json(comments);
    }

    // console.log(comments, "comments");
  } catch (err) {
    console.error("Get Comments Error in controller", err);
    res.status(500).send("server err : Get Comments Error in controller", err);
  }
};

module.exports = {
  getCommentsByPost,
  createComment,
};
