import React, { useState } from "react";
import Button from "../../components/button/Button";
import { loginUser } from "../../api/users";
import Toast from "../../components/toast/Toast";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

interface loginValue {
  username: string;
  password: string;
}

const Login = () => {
  const { setUserInforOnline, userInfoOnline } = useGlobalContext();
  const navigate = useNavigate();
  const [toast, setToast] = useState<Boolean>(false);

  const [loginValue, setLoginValue] = useState<loginValue>({
    username: "",
    password: "",
  });

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //* call api function for login
    const user = await loginUser(loginValue);
    if (user?.status === 200) {
      console.log("User Info In If Login.tsx componet", user);
      setToast(true);
      console.log(user, "user is login.jsx");
      setUserInforOnline(user.data);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
  console.log("USER INFO CONTEXT IN LOGIN", userInfoOnline);
  return (
    <div className="h-[90vh]  justify-center items-center flex ">
      {toast && <Toast toast={toast} text={"you are login"} />}
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-[90%] bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>
        <input
          onChange={onChangeHandle}
          value={loginValue.username}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />

        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        <input
          onChange={onChangeHandle}
          value={loginValue.password}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Login"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
