import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetToken, getInfomationGithubUser } from "../api/github";
// import RejectLogin from "./RejectLogin";
import RejectLogin from "./RejectLogin";
import Loading from "./Loading";
const GithubAccess = () => {
  const [token, setToken] = useState("");
  const [getUserData, setGetUserData] = useState("");
  const [userDataGithub, setUserDataGithub] = useState("");
  const [rejectLogin, setRejectLogin] = useState(false);

  const navigate = useNavigate();

  //* get clinet_id & run handleGithubLogin
  const getCodeinUrl = () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    console.log("hi code", code);
    handleGithubLogin(code);
  };

  const setUserDataToLocal = (token) => {
    console.log("buy");
    console.log(token, "in getuserdata");
    localStorage.setItem("userData", JSON.stringify(getUserData));
    setUserDataGithub(getUserData);
    console.log("userdata", getUserData);
  };

  const handleGithubLogin = (code) => {
    //*_api_function
    getInfomationGithubUser(token, setGetUserData);
    setUserDataToLocal();
    if (code && !token) {
      //*_api_function
      GetToken(code, setToken);
    }
  };

  localStorage.setItem("tokens", token);
  const localtoken = localStorage.getItem("tokens", token);

  const controlLogin = () => {
    return setTimeout(() => {
      setRejectLogin(true);
    }, 3000);
  };

  useEffect(() => {
    getCodeinUrl();
    userDataGithub && localtoken ? navigate("/profile") : controlLogin();
  });

  return <div>{rejectLogin ? <RejectLogin /> : <Loading />}</div>;
};

export default GithubAccess;
