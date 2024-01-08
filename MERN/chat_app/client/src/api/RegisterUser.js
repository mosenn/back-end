import axios from "axios";
axios.defaults.baseURL = "http://localhost:4010";
axios.defaults.withCredentials = true;

export const handleRegisterUser = async (
  username,
  password,
  setUser,
  setUserId,
  checkRegisterAndLogin
) => {
  const url = checkRegisterAndLogin === "register" ? "/register" : "/login";
  const { data } = await axios.post(
    url,
    {
      username,
      password,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  // console.log(data.username, "this username coming from axios post");
  // console.log(data.id, "this id coming from axios post");
  // console.log(data.id, "this id coming from axios post");
  // console.log(data.token, "this token coming from axios post");
  setUser(data.username);
  setUserId(data.id);
  // setUserToken(data.token);
};

export const Profile = async (setUserId, setUser) => {
  const userDataResponse = await axios.get("/profile");
  setUser(userDataResponse.data.name);
  setUserId(userDataResponse.data.userId);
  // console.log(userDataResponse.data, "prfoile user info");
};
