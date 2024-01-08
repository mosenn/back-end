import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { AiFillHome } from "react-icons/ai";

const UserCheckingLogin = ({ children }: any) => {
  const [authUser, setAuthUser] = useState(true);
  const navigate = useNavigate();
  const { userInfoOnline } = useGlobalContext();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };

  const CheckingUser = () => {
    if (!userInfoOnline.username) {
      setAuthUser(false);
      // navigate("/login");
    } else {
      setAuthUser(true);
    }
  };
  useEffect(() => {
    CheckingUser();
  }, [userInfoOnline]);
  // console.log(TextAuth);
  // console.log("userInfoOnline out side useeffect", userInfoOnline);

  return (
    <>
      {authUser ? (
        children
      ) : (
        <section className="text-center">
          <div>
            <h1>you are not access this page first login 😉</h1>
          </div>
          <div className="p-1 m-1  flex justify-center">
            <Button
              className="p-2 m-3 w-[220px] text-lg border border-gray-300 rounded-lg bg-blue-400 text-white"
              onClick={navigateToLogin}
              text="you have account login here"
              icon=""
            ></Button>
            <Button
              text="register account here"
              className="p-2 m-3 w-[220px] text-lg border border-gray-300 rounded-lg bg-blue-400 text-white"
              onClick={navigateToRegister}
              icon=""
            ></Button>
            <Button
              className="flex justify-center items-center p-2 m-3 w-[220px] text-lg border border-gray-300 rounded-lg bg-blue-400 text-white"
              text={`back to home page `}
              onClick={navigateToHome}
              icon={<AiFillHome />}
            ></Button>
          </div>
        </section>
      )}
    </>
  );
};

export default UserCheckingLogin;
