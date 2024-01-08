import { useRef, useState } from "react";
import { registerUser } from "../api/registerAndLogin";
import RecaptchaGoogle from "./RecaptchaGoogle";
import { postTokenRecapchaGoogle } from "../api/recapchaGoogle";
import LinksForLoginAndSigin from "./LinksForLoginAndSigin";

const FormRegister = ({
  setDataUserRegister,
  setUserRegisterError,
  setCheckRecapchaGoogle,
}) => {
  const refRecaptcha = useRef(null);
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });

  const onchangeHandleRegister = (inputs) => {
    setRegisterValue({
      ...registerValue,
      [inputs.target.name]: inputs.target.value,
    });
    //*if want show warning message in typing register inputs
    // registerUser(registerValue, setDataUserRegister, setUserRegisterError);
  };

  //*
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "in on change file");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRegisterValue({
        ...registerValue,
        pic: reader.result,
      });
    };
    console.log("after reader ", registerValue);
  };
  //*

  const handleSubmit = async (form) => {
    form.preventDefault();
    const token = refRecaptcha.current.getValue();
    const responseRecapcha = await postTokenRecapchaGoogle(token);
    setCheckRecapchaGoogle(responseRecapcha);

    registerUser(registerValue, setDataUserRegister, setUserRegisterError);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* register inputs gmail , pass , confirmpass */}
        <input
          type="text"
          name="email"
          placeholder="email"
          value={registerValue.email}
          onChange={onchangeHandleRegister}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={registerValue.password}
          onChange={onchangeHandleRegister}
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="confrim password"
          value={registerValue.confirmPassword}
          onChange={onchangeHandleRegister}
        />
        {/* upload image input file */}
        <input
          type="file"
          name="pic"
          placeholder="uplod profile image"
          onChange={handleFileChange}
        />
        {/* inputs radio for chose profile image*/}
        <input
          type="radio"
          id="profile1"
          value="men-1.jpg"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile1">
          <img
            src="men-1.jpg"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </label>
        <input
          type="radio"
          id="profile2"
          value="men-2.png"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile2">
          <img
            src="men-2.png"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </label>
        <input
          type="radio"
          id="profile3"
          value="woman-1.png"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile3">
          <img
            src="woman-1.png"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </label>
        <input
          type="radio"
          id="profile4"
          value="woman-2.png"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile4">
          <img
            style={{ width: "100px", height: "100px" }}
            src="woman-2.png"
            alt=""
          />
        </label>
        <button type="submit">Register</button>

        <RecaptchaGoogle refRecaptcha={refRecaptcha} />
      </form>
      <LinksForLoginAndSigin />
    </div>
  );
};

export default FormRegister;
