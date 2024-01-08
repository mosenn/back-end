import { ClimbingBoxLoader } from "react-spinners";
const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "25px",
      }}
    >
      {/* <h1>Loading...</h1> */}
      <ClimbingBoxLoader color="#36d7b7" size={15} />
    </div>
  );
};

export default Loading;
