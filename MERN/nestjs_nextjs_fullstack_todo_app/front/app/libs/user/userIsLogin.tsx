import axios from "axios";

const url = "http://localhost:2023/user";
// axios.defaults.withCredentials = true;

export const userIsLogin = async () => {
  const user = await axios.get(`${url}/userislogin`, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // Include this line to send the cookie
  });
  console.log("this user is login", { user });
  return user;
};
