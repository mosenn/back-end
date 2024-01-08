import { useState } from "react";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
const UserLoginAndRegister = () => {
  const [showLogin, setShowLogin] = useState(false);
  const toggelShowLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div>
      {showLogin ? <UserLogin /> : <UserRegister />}
      <button onClick={toggelShowLogin}>
        {" "}
        {showLogin ? "back to register" : "you have account?"}
      </button>
    </div>
  );
};

export default UserLoginAndRegister;
