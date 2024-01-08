import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

export const postUserComments = async (
  data: { comment: string },
  id: string,
  postId: string
) => {
  const { comment } = data;
  // console.log("PostId", postId);
  // console.log("authorId", id);
  // console.log(data);
  try {
    console.log(data);
    const response = await axios.post(
      `${baseUrl}/comments`,
      {
        comment: comment,
        author: id,
        postId: postId,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log("response", response);
    return response;
  } catch (err: unknown) {
    console.log("post user comment Err", err);
    return err;
  }
};

export const getAllPostComments = async (postId: string) => {
  // console.log("Id", postId);
  try {
    const comments = await axios.get(`${baseUrl}/comment/${postId}`);
    // console.log("COMMENTS FROM API", comments);
    return comments;
  } catch (err: any) {
    // console.log("get Comments Err", err);
    return err;
  }
};
