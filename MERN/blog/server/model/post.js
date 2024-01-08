const mongoose = require("mongoose");
const commentModel = require("./comment");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    summery: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    // comments: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "comments",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

//* this work but i want edit

// postSchema.methods.addComment = async function (comment) {
//   const newComment = new commentModel({
//     comment: comment.comment,
//     author: comment.author,
//     post: this._id,
//   });
//   await newComment.save();
//   this.comments.push(newComment._id);
//   await this.save();
// };

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
