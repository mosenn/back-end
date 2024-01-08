import axios from "axios";

const url = "http://localhost:2023/user";
// axios.defaults.withCredentials = true;

type registerParam = {
  email: string;
  password: string;
  confirmPassword: string;
};
export const register = async ({
  email,
  password,
  confirmPassword,
}: registerParam) => {
  const user = await axios.post(
    `${url}/register`,
    { email, password, confirmPassword },
    { headers: { "Content-Type": "application/json" } , }
  );
  console.log("user data register", { user });
  return user;
};
