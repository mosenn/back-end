import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

//* TODO Fixed Parameter Type createPost

//* Post
export const createPost = async (data: {}) => {
  console.log(data, "data in create post");
  try {
    const post = await axios.post(`${baseUrl}/createpost`, data, {
      // withCredentials: true,
    });
    // console.log(response, "response");
    return post;
  } catch (err: unknown) {
    // console.log("Create Post Errr", err);
    return err;
  }
};

//* Get
export const posts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    // console.log(response, "RESPONSE");
    return response;
  } catch (err: unknown) {
    console.log("All Posts Error", err);
    return err;
  }
};

//* Get
export const userPost = async () => {
  try {
    const response = await axios.get(`${baseUrl}/userposts`);
    console.log(response, "RESPONSE");
    return response;
  } catch (err:unknown) {
    console.log("User Post Error", err);
    return err;
  }
};
// * Put
export const editPost = async (id: string, data: any) => {
  console.log(id, "ID IN EDITPOST");
  console.log(data, "DATA in editpost");
  const { summery, title, content, cover } = data;

  try {
    const res = await axios.put(
      `${baseUrl}/editpost/${id}`,
      { title, content, summery, cover },
      // {
      //   withCredentials: true,
      // }
    );
    console.log(res, "response edit post in api");
    return res;
  } catch (err:unknown) {
    console.log("edit post err", err);
    return err;
  }
};

//* Delete
export const deleteUserPost = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/deletepostuser/${id}`, {
      method: "delete",
    });
    console.log(response, "response");
    return response as {};
  } catch (err:unknown) {
    console.log("Delete Post Error", err);
    return err;
  }
};
