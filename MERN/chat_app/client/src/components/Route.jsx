import React from "react";
import { Register } from "../pages/Register";
import { Chat } from "../pages/Chat";
import { useGlobalcontext } from "../Context/Context";
const Route = () => {
  const { user } = useGlobalcontext();

  if (user) {
    return (
      <div>
        {/* //*Todo set pop up after finish project for login with toast */}
        {/* <h1>Welcome! {user} You are Login</h1> */}
        <Chat />
      </div>
    );
  }

  return (
    <div>
      <Register />
    </div>
  );
};

export default Route;
