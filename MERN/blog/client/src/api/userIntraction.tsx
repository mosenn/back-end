import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

export const postLike = async (postId: string) => {
  console.log(postId, "postId");
  try {
    const like = await axios.post(`${baseUrl}/likedPost/${postId}`);
    console.log(like, "like in api");
    return like;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.response?.data?.message || "Something went wrong");
  }
};
export const getLikes = async (postId: string) => {
  try {
    const likes = await axios.get(`${baseUrl}/likes/${postId}`);
    // console.log("All Likes in get Likes Api", likes);
    return likes;
  } catch (err: any) {
    console.log("Get Likes Error", err);
    return err;
  }
};
export const postSave = async (postId: string) => {
  try {
    const save = await axios.post(`${baseUrl}/savedPost/${postId}`);
    return save;
  } catch (err: any) {
    console.log("save post Error", err);
    throw new Error(err.response?.data?.message || "Something went wrong");
  }
};
export const getSave = async (postId: string) => {
  try {
    const saves = await axios.get(`${baseUrl}/saves/${postId}`);
    return saves;
  } catch (err: any) {
    console.log(err);
  }
};

