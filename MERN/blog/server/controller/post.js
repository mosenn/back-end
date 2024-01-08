const jwt = require("jsonwebtoken");
const postModel = require("../model/post");

// *method Post create post
const createPost = async (req, res) => {
  // const { content, title, summery, cover } = req.body;
  //* validation create post with yup
  const { content, title, summery, cover } = req.body;
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const post = await postModel.create({
        content,
        title,
        summery,
        cover,
        author: user.id,
      });
      return res.status(201).json({ data: post, message: "post is create" });
    }
  } catch (err) {
    console.log("Create Post", err);
    return res
      .status(500)
      .json({ message: "server have a proplem for create post", err: err });
  }
};

//*method Get all posts
const posts = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .populate("author", ["username", "pic", "_id"])
      .sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (err) {
    console.log("All Post Err", err);
    return res
      .status(500)
      .json({ message: "server is proplem cant get all posts", err: err });
  }
};

//*method Get author post (for panel in clinet , )
const userPost = async (req, res) => {
  const { userToken } = req.cookies;
  try {
    // console.log("User Token", userToken);
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const userPost = await postModel.find({ author: user.id });
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("User Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem can get user post", err: err });
  }
};

//* method Put  edit post
const editPost = async (req, res) => {
  const id = req.params.id;
  // console.log("Edit post Id ", id);
  const { userToken } = req.cookies;
  const { summery, title, content, cover } = req.body;
  try {
    if (userToken) {
      const post = await postModel.findByIdAndUpdate(
        id,
        {
          title: title,
          summery: summery,
          content: content,
          cover: cover,
        },
        {
          new: true,
        }
      );
      // console.log(post);
      await post.save();
      return res.status(200).json(post);
    }
  } catch (err) {
    console.log("Edit Post Error Controller", err);
    return res
      .status(500)
      .json({ message: "post is not edit", errMessage: err });
  }
};
//*method Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
  try {
    if (userToken) {
      const userPost = await postModel.findByIdAndRemove(id);
      if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("Delete Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem(delete)", err: err });
  }
};
module.exports = {
  createPost,
  posts,
  userPost,
  deleteUserPost,
  editPost,
};
