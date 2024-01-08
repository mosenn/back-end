import React, { useEffect, useState } from "react";
import { handleRegisterUser } from "../api/RegisterUser";
import { useGlobalcontext } from "../Context/Context";
export const Register = () => {
  const { user, setUser, userId, setUserId, userToken, setUserToken } =
    useGlobalcontext();
  // console.log(user, userId);
  const [ValueRegister, setValueRegister] = useState({
    username: "",
    password: "",
  });
  const [checkRegisterAndLogin, setCheckRegisterAndLogin] =
    useState("register");

  const takeRegisterValue = (input) => {
    const { name, value } = input.target;

    setValueRegister({
      ...ValueRegister,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = ValueRegister;
    if (username && password) {
      // console.log("user and pass is done");
      // console.log("userInfoRegisterInSubmitFunction:", ValueRegister);
      handleRegisterUser(username, password, setUser, setUserId , checkRegisterAndLogin);
      setValueRegister({ username: "", password: "" });
    } else {
      console.log("error");
    }
  };
  const toggelRegisterAndlogin = () => {
    checkRegisterAndLogin === "register"
      ? setCheckRegisterAndLogin("login")
      : setCheckRegisterAndLogin("register");
  };
  return (
    <div className="h-screen border-2 border-black flex  flex-col md:flex-row ">
      <div className="h-1/6 md:w-1/2 md:h-full bg-red-400">for detail</div>
      <form
        onSubmit={handleSubmit}
        className="h-full  flex border-2 border-gray-500 flex-col md:items-center justify-center  w-full bg-blue-300"
      >
        <input
          type="text"
          name="username"
          value={ValueRegister.username}
          className="outline-0 border-2 border-[#e0e7ff] rounded-sm p-2 m-2  md:w-1/2"
          placeholder="username"
          onChange={(input) => {
            takeRegisterValue(input);
          }}
        />
        <input
          type="text"
          name="password"
          value={ValueRegister.password}
          className="outline-0 border-2 border-[#e0e7ff] rounded-sm p-2 m-2 md:w-1/2"
          placeholder="password"
          onChange={(input) => {
            takeRegisterValue(input);
          }}
        />
        {checkRegisterAndLogin === "register" && (
          <>
            <button className="bg-[#0284c7] text-colortext md:w-1/2 p-1 m-2  hover:bg-[#0369a1] text-lg rounded-sm	 text-[#fafafafa]">
              Register
            </button>
            <div>
              <button onClick={toggelRegisterAndlogin}>
                {" "}
                you can login here{" "}
              </button>
            </div>
          </>
        )}
        {checkRegisterAndLogin === "login" && (
          <>
            <button className="bg-[#0284c7] text-colortext md:w-1/2 p-1 m-2  hover:bg-[#0369a1] text-lg rounded-sm	 text-[#fafafafa]">
              Login
            </button>
            <div>
              <button onClick={toggelRegisterAndlogin}>
                you can register here
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
