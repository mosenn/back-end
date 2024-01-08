import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormRegister from "./FormRegister";
const UserRegister = () => {
  const navigate = useNavigate();

  const [dataUserRegister, setDataUserRegister] = useState("");
  const [userRegisterError, setUserRegisterError] = useState([]);
  const [checkRecapchaGoogle, setCheckRecapchaGoogle] = useState(false);
  const [messageErrorRecapchaGoogle, setMessageErrorRecapchaGoogle] =
    useState("");
  useEffect(() => {
    if (dataUserRegister.data && checkRecapchaGoogle.data.success) {
      console.log(dataUserRegister.data, "data user register in submit");
      localStorage.setItem("userData", JSON.stringify(dataUserRegister.data));
      navigate("/profile");
    }
    if (!checkRecapchaGoogle?.data?.success) {
      setMessageErrorRecapchaGoogle(
        "accpet recapcha, if dont see refresh page"
      );
    }
  }, [dataUserRegister, userRegisterError]);
  // const handlelog = () => {
  //   console.log(userRegisterError);
  // };
  return (
    <div>
      {/* <button onClick={handlelog}>log</button> */}
      {messageErrorRecapchaGoogle}
      {userRegisterError.length > 0 &&
        userRegisterError?.map((items, index) => {
          console.log(items, "errors in user register clinet");
          return (
            <div key={index}>
              <p>{items}</p>
            </div>
          );
        })}
      <FormRegister
        setDataUserRegister={setDataUserRegister}
        setUserRegisterError={setUserRegisterError}
        setCheckRecapchaGoogle={setCheckRecapchaGoogle}
      />
    </div>
  );
};

export default UserRegister;
