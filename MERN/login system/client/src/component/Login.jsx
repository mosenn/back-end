import UserLoginAndRegister from "./UserLoginAndRegister";

const Login = () => {
  console.log(import.meta.env.VITE_CLINET_ID);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <UserLoginAndRegister />
    </div>
  );
};
export default Login;
