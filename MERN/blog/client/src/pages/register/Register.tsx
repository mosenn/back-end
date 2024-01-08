import React, { useState } from "react";
import Button from "../../components/button/Button";
import { registerUser, uploadRegisterImage } from "../../api/users";
import { useNavigate } from "react-router-dom";
import "./register.css";
import Toast from "../../components/toast/Toast";
import Loading from "../../components/loading/Loading";

interface ErrorRegister {
  username?: string;
  minUsername?: string;
  password?: string;
  confirmPassword?: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [errorRegister, setErrorRegister] = useState<ErrorRegister>({});
  const [toast, setToast] = useState<Boolean>(false);
  // TODO Refactor State to global state
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(false);
  const [uploadAnimation, setUploadAnimation] = useState(false);
  const [uploadMessage, setuploadMessage] = useState(
    "upload your profile image"
  );
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",

    pic: {},
    //* default image set
    // pic: "https://i.postimg.cc/PfvxsgPB/woman-2.png",
  });

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setDisabelSubmitForm(true);
        setRegister({ ...register, pic: file });
      }
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
    console.log("Regiser State in onChange func", register);
  };

  const handleError = (err: {}) => {
    setErrorRegister(err);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);
    console.log(user, "user");
    handleError(user);
    if (user?.status === 201) {
      setToast(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  //  TODO  reafactor to Global function
  const Uploadimage = async () => {
    setUploadAnimation(true);
    const res = await uploadRegisterImage(register.pic);
    console.log("response upload pic in submit func", res);
    if (res.status === 200) {
      setTimeout(() => {
        setUploadAnimation(false);
        setuploadMessage("upload is done ✔");
        setDisabelSubmitForm(false);
      }, 3000);
      setRegister({
        ...register,
        pic: res.data.secure_url,
      });
    }
    if (res?.response?.status === 400) {
      console.log("error");
      setUploadAnimation(false);
      setuploadMessage("upload is fail ☹");
    }
    console.log("register state in uplpad image btn", register);
  };
  console.log("register state in after uploadImage btn", register);
  return (
    <div className="h-[90vh]  justify-center items-center flex">
      {toast && (
        <Toast text={"register is success redirect to login"} toast={toast} />
      )}
      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>
        {errorRegister?.username}
        <input
          onChange={handleOnChange}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />
        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        {errorRegister?.password}
        <input
          onChange={handleOnChange}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <label
          className="ml-2 font-semibold text-gray-900"
          htmlFor="confirmPassword"
        >
          confirm password
        </label>
        {errorRegister?.confirmPassword}
        <input
          onChange={handleOnChange}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="confirmPassword"
          name="confirmPassword"
        />
        <section className="flex flex-col md:flex-row items-center text-center md:justify-between">
          <div>
            <label
              className="ml-2 font-semibold text-gray-900"
              htmlFor="pic"
            ></label>
            <input
              onChange={handleOnChange}
              className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
              type="file"
              id="pic"
              name="pic"
              accept=".png, .jpg, .jpeg .webp"
            />
          </div>
          <div className="w-full flex justify-center md:justify-end items-center">
            <Button
              icon=""
              disabled={false}
              text={
                uploadAnimation ? (
                  <Loading size={35} color={"#ECF0F3"} />
                ) : (
                  uploadMessage
                )
              }
              className={
                "bg-blue-500 hover:bg-blue-300 w-[96%]   md:w-[180px] md:-translate-x-1 lg:w-[250px] rounded p-3 text-zinc-50 font-semibold"
              }
              type="button"
              onClick={Uploadimage}
            ></Button>
          </div>
        </section>
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            type="submit"
            disabled={disabelSubmitForm}
          >
            register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
