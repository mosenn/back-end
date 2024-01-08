import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { takeCodeAndPostToServerLinkedin } from "../api/linkedin";
import Loading from "./Loading";
const LinkedinAccess = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [messageSigin, setMesssageSigin] = useState(false);

  const getLinkedinCodeinParamas = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");

    if (code) {
      const data = await takeCodeAndPostToServerLinkedin(code);
      console.log("this is user data : ", data);

      //* save data to local and redirect to profile page
      if (data) {
        localStorage.setItem("userData", JSON.stringify(data));
        setTimeout(() => {
          navigate("/profile");
          setLoading(false);
        }, 3000);
        return;
      }
      //*redirect to login page
      if (data === null) {
        // console.log("alert");
        setMesssageSigin(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 3000);
      }
    }
  };

  useEffect(() => {
    getLinkedinCodeinParamas();
  }, []);

  return (
    <div>
      {messageSigin && (
        <div>
          <h3>you are sigin before ✌</h3>
          <h4>redirect to login page wait..</h4>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default LinkedinAccess;
