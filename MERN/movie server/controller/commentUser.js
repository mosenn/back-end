const commentUsersModel = require("../model/commentUser");

const getCommentUser = async (req, res) => {
  try {
    const commentUsers = await commentUsersModel.find();
    // console.log(commentUsers);
    return res.status(200).json(commentUsers);
  } catch (err) {
    console.log("hot movie error", err);
  }
};

module.exports = {
    getCommentUser,
};
