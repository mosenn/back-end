import { useEffect, useState } from "react";
import { loginUser } from "../api/registerAndLogin";
import { useNavigate } from "react-router-dom";
import { loginWithLinkedin } from "../api/linkedin";
const UserLogin = () => {
  const [showLoginLinkedin, setShowLoginLinkedin] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [loginErrorLinkedin, setLoginLinkedinError] = useState("");
  const onChangeHandelLogin = (inputs) => {
    setLoginValue({ ...loginValue, [inputs.target.name]: inputs.target.value });
  };
  const handleLoginForm = (form) => {
    form.preventDefault();
    console.log(loginValue, "login value");
    loginUser(loginValue, setLoginData, setLoginError);
  };

  useEffect(() => {
    console.log(loginData, "in use effect login data");
    localStorage.setItem("userData", JSON.stringify(loginData?.data));
    if (loginData) {
      navigate("/profile");
    }
  }, [loginData]);

  const handleLoginLinkedin = async (e) => {
    try {
      e.preventDefault();
      const emailValue = e.target[0].value;
      console.log(emailValue);
      const data = await loginWithLinkedin(emailValue);

      console.log("login linkedin submit", data);
      if (data) {
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/profile");
      }
    } catch (err) {
      console.log("ERROR IN SUBMIT", err[1]);
      //*can do this set error to one state but i want set to diffrent state
      // setLoginError(err[1]);
      setLoginLinkedinError(err[1]);
    }
  };

  const toggelLoginLinkedin = () => {
    setShowLoginLinkedin(!showLoginLinkedin);
  };
  return (
    <div>
      {loginErrorLinkedin && loginErrorLinkedin}
      {loginError && <p>password or email is worng</p>}
      <form action="" onSubmit={handleLoginForm}>
        <input
          type="text"
          name="email"
          placeholder="your@gmail.com"
          value={loginValue.email}
          onChange={onChangeHandelLogin}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={loginValue.password}
          onChange={onChangeHandelLogin}
        />
        <button type="submit">login</button>
      </form>
      <button onClick={toggelLoginLinkedin}>Login with Linkedin</button>
      {showLoginLinkedin && (
        <form onSubmit={handleLoginLinkedin}>
          <input type="text" placeholder=" linkedin email" />
          <button>login</button>
        </form>
      )}
    </div>
  );
};

export default UserLogin;
