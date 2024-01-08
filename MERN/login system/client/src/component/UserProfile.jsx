import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserProfile = () => {
  const navigate = useNavigate();

  //*get token and user data from local
  let localtoken = localStorage.getItem("tokens");
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData?.email, "userData");
  console.log(userData?.data, "localgitUserDAta");
  //*linkedin
  // console.log(userData?.userProfile);
  // console.log(userData?.userEmail);
  // console.log(userData?.userProfile?.localizedFirstName);
  // console.log(
  //   userData.userProfile?.profilePicture?.displayImage,
  //   "image linkedin"
  // );
  console.log(userData);

  const GetuserDataLocal = userData?.data;
  console.log(GetuserDataLocal, "userdata in uselayout");

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("tokens");
    localStorage.removeItem("userData");
    const userData = JSON.parse(localStorage.getItem("userData"));

    console.log(userData);
    if (!localStorage.getItem("tokens") && !localStorage.getItem("userData")) {
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log(localtoken, "localtoken");
    if (!localStorage.getItem("tokens") && !localStorage.getItem("userData")) {
      navigate("/login");
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => {
          logout();
        }}
      >
        logout
      </button>
      <h1>Profile Pages</h1>
      {/* user prfoile github */}
      {localtoken && GetuserDataLocal ? (
        <>
          <h2>welcome {GetuserDataLocal?.login}</h2>
          <h2>{GetuserDataLocal?.blog ? GetuserDataLocal?.blog : ""}</h2>
          <figure>
            <img
              src={GetuserDataLocal?.avatar_url}
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
              alt=""
            />
          </figure>
          {userData?.email}
          <Link to={GetuserDataLocal?.html_url}>
            {GetuserDataLocal?.html_url}
          </Link>
        </>
      ) : (
        ""
      )}
      {/* register and login manual  */}
      {userData?.pic && (
        <div>
          <figure>
            <img
              src={userData?.pic}
              alt="prfoile_image"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
          </figure>
          {/* <p>
            userName:<span>{userData?.firstName} </span>
            <span>{userData?.lastName}</span>
          </p> */}
          <p>{userData?.email}</p>
          <p>{userData?.password}</p>
        </div>
      )}
      {/* user profile linkedin */}
      {userData?.firstName && (
        <div>
          <p>
            user name : <span>{userData?.firstName} </span>
            <span>{userData?.lastName}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
