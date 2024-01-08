import axios from "axios";

//*take url params code pass to api for take token and return user data linkedin
export const takeCodeAndPostToServerLinkedin = async (code) => {
  // console.log(code, "code in api clinet"); //* have log code
  try {
    const response = await axios.post(
      //*set route server for get code
      `https://serverloginsystem.vercel.app/accessTokenLinkedin?code=${code}` //=> for online linkdin sigin
      // `http://localhost:5000/accessTokenLinkedin?code=${code}` //=> for local  linkdin sigin
    );
    const data = await response.data;
    // console.log(linkedinData, "linkedin response at _api.js"); //*have log here

    return data;
  } catch (err) {
    console.log(err.data, "err in api clinet");
  }
};

//*login linkedin
export const loginWithLinkedin = async (email) => {
  try {
    const sendEamil = await axios.post(
      "http://localhost:5000/loginLinkedin",
      { email: email },
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(sendEamil.data);
    return sendEamil.data;
  } catch (err) {
    console.log("ERROR IN LOGIN LINKEDIN : ", err.response.data);
    throw err.response.data;
  }
};
