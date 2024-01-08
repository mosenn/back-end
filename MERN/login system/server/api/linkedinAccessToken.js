const axios = require("axios");
const linkdinModel = require("../model/linkedin");

//*getTokenAccessUserDataLinkedin & getCodeAccessLinkedin for singin linkedin
let urls = [
  "https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))",
  "https://api.linkedin.com/v2/me",
  "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
];

const getTokenAccessUserDataLinkedin = async (accessTokenApi) => {
  try {
    //*for  online
    const accessToken = accessTokenApi.data.access_token;
    // console.log("response in api:", accessTokenApi);
    // console.log("Access token in api:", accessToken);
    //*for  online
    const responses = await Promise.all(
      urls.map((url) =>
        axios.get(url, {
          headers: {
            //*for online
            Authorization: `Bearer ${accessToken}`,
          },
        })
      )
    );
    if (responses[0].status === 200) {
      console.log("Sigin status: ", responses[0].status);
      const [userImage, userProfileApi, emailApi] = responses;

      //*for sigin

      const checkUser = await linkdinModel.findOne({
        email: emailApi?.data?.elements[0]["handle~"]?.emailAddress,
      });

      console.log("checkUser", checkUser);
      if (checkUser) {
        throw Error("you have account ✌");
      }
      const createLinkedinUserData = await linkdinModel.create({
        token: accessToken,
        email: emailApi?.data?.elements[0]["handle~"]?.emailAddress,
        // userProfile: userProfileApi?.data,
        firstName: userProfileApi?.data?.localizedFirstName,
        lastName: userProfileApi?.data?.localizedLastName,
        pic: userImage?.data?.profilePicture["displayImage~"]?.elements[0]
          ?.identifiers[0]?.identifier,
      });
      //*for sigin
      //*for sigin
      console.log("create", createLinkedinUserData);
      return createLinkedinUserData;
      //*for sigin
    }
    // console.log("Sigin Data Response Linkedin : ", userDataResponse.data);
  } catch (err) {
    console.log(
      "ERROR IN > api > getTokenAccessUserDataLinkedin function ",
      err
    );
    throw err;
  }
};

const getCodeAccessLinkedin = async (code) => {
  try {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      client_id: process.env.CLIENT_ID_LINKEDIN,
      client_secret: process.env.SECRET_LINKEDIN,
      redirect_uri: "https://loginsystemtest.vercel.app/accessLinkedin", //=> for online
      // redirect_uri: "http://127.0.0.1:5173/accessLinkedin", //=> for local
      // "clinet_address/accessLinkedin",
    });
    const accessTokenApi = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    //*take Token from api then return user infomation linkedin
    //*for sigin online
    const userData = await getTokenAccessUserDataLinkedin(accessTokenApi);
    //*for sigin online
    // const userData = await getTokenAccessUserDataLinkedin(
    //   "AQWpewwSKlWRP1RQSsA5xf4MsKpGswnF7n3KwAVlhfifSuS_hzcAJWsHkOg1J58OhyGUcZV36jtzxDJdIsp7-TCSEduekJjCM2jA0oa0fVYVpmUuVv7LFUu6-xU_NDcY91hQ7shdYfLIFs_lZ96RO6Glqrtb-69A1pznFS4Y8fDRce_qIfP3zc53nNNvme7YwqIeTNTNQijygI9Li3_smpW1d-J75W3BrN3YWVydn8XFsxFcMBUjRPyJcu8xUSbH45c7fm8g_b9-GOWT_J2r3U-UJG4R40gpvv0uQ_04YSqCI3sSwiAc638G126uPKI9rmoSScxD4Dsx2X_lsa5I-eQZ3my-TA"
    // );
    // console.log(
    //   "LinkedIn user data in api > getCodeAccessLinkedin function:",
    //   userData
    // );

    return accessTokenApi?.data;
  } catch (err) {
    console.log(err.accessTokenApi?.data.error_description);
    return { error: err.accessTokenApi?.data.error_description };
  }
};

//*For Login Linkedin
const LoginLinkedin = async (dataBaseTOken) => {
  try {
    const userDataResponse = await axios.get(
      "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
      {
        headers: {
          //*for online
          Authorization: `Bearer ${dataBaseTOken}`,
          //*for online
          // Authorization: `Bearer AQWpewwSKlWRP1RQSsA5xf4MsKpGswnF7n3KwAVlhfifSuS_hzcAJWsHkOg1J58OhyGUcZV36jtzxDJdIsp7-TCSEduekJjCM2jA0oa0fVYVpmUuVv7LFUu6-xU_NDcY91hQ7shdYfLIFs_lZ96RO6Glqrtb-69A1pznFS4Y8fDRce_qIfP3zc53nNNvme7YwqIeTNTNQijygI9Li3_smpW1d-J75W3BrN3YWVydn8XFsxFcMBUjRPyJcu8xUSbH45c7fm8g_b9-GOWT_J2r3U-UJG4R40gpvv0uQ_04YSqCI3sSwiAc638G126uPKI9rmoSScxD4Dsx2X_lsa5I-eQZ3my-TA`,
        },
      }
    );

    if (userDataResponse.status === 200) {
      console.log("Login response : ", userDataResponse.data);
      return userDataResponse.data;
    }
    console.log(userDataResponse.data, "response data");
    return userDataResponse.data;
  } catch (err) {
    console.error("ERROR IN > api > LoginLikedin function ", err);
    console.error(err?.response?.data, "worng Login Linkedin");
    return err?.response?.data;
  }
};

module.exports = {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
  LoginLinkedin,
};
