import axios from "axios";
const url = "http://localhost:3000/";

export const getUsersChats = async (setChats) => {
  const chatData = await axios.get(url);

  // console.log(chatData, "axios get");

  setChats(chatData);
};
