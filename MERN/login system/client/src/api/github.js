import axios from "axios";
export const GetToken = async (code, setToken) => {
  try {
    const response = await axios.get(
      //*add server address for send code 
      // server/AccessTokenGithub
      `https://serverloginsystem.vercel.app/getAccessToken?code=${code}`
    );
    const token = await response.data.token;
    console.log(token, "this token from getToken at _api.js");

    setToken(token);
  } catch (err) {
    console.log(err);
  }
};

export const getInfomationGithubUser = async (token, setGetUserData) => {
  try {
    console.log(token, "tokenss in getinformation githubuser api.js");
    //* if handel 401 https status
    if (token) {
      const userData = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${token}`, // add 'Bearer' before token
        },
      });
      console.log(userData, "in in getinformation githubuser api.js");
      setGetUserData(userData);
    }
  } catch (err) {
    console.log(err);
  }
};
