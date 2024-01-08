import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
const LinksForLoginAndSigin = () => {
  const CLINET_ID_GITHUB = import.meta.env.VITE_CLINET_ID_GITHUB;
  const CLINET_ID_LINKEDIN = import.meta.env.VITE_CLINET_ID_LINKEDIN;
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link
        style={{
          margin: "5px",
          width: "fit-content",
        }}
        to={`https://github.com/login/oauth/authorize?client_id=${CLINET_ID_GITHUB}`}
      >
        Sigin github
      </Link>
      <Link
        style={{
          margin: "5px",
          width: "fit-content",
        }}
        to={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLINET_ID_LINKEDIN}&redirect_uri=https://loginsystemtest.vercel.app/accessLinkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`}
        //  for online ridirect url linkedin
        // to={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLINET_ID_LINKEDIN}&redirect_uri=http://127.0.0.1:5173/accessLinkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`} // for local linkdin url redirect
      >
        Sigin linkedin
      </Link>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};

export default LinksForLoginAndSigin;
