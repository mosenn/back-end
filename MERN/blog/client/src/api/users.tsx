import axios from "axios";

interface registeruserType {
  username?: string;
  password: string;
  confirmPassword: string;
  pic: {};
}

axios.defaults.withCredentials = true;
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");
//* Register user api clinet

export const registerUser = async (UserRegisterData: registeruserType) => {
  // console.log(UserRegisterData);
  try {
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {
      headers: { "Content-Type": "application/json" },
    });
    // console.log(register, "response user is register");
    return register;
  } catch (err: any & { response?: unknown }) {
    // console.log(err);
    const errors = err?.response?.data;
    // setErrorRegister(errors);
    return errors;
  }
};

//* Upload pic For Profile Image
const CLOUDNAME = import.meta.env.VITE_CLOUDINARAY_CLOUDNAME;
console.log(`🚀  file: users.tsx:32  CLOUDNAME:`, CLOUDNAME)
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARAY_UPLOAD_PRESET;
console.log(`🚀  file: users.tsx:33  UPLOAD_PRESET:`, UPLOAD_PRESET)
const cloudinaryApi = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`;
//  TODO  Refactor to Global function uploadRegisterImage and rename to uploadImage
export const uploadRegisterImage = async (pic: {} | any) => {
  try {
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUDNAME);
    const res = await axios.post(cloudinaryApi, data, {
      withCredentials: false,
    });
    console.log(res, "response");
    return res;
  } catch (err:any) {
    console.log(err);
    return err;
  }
};

//* Login user api clinet
interface user {
  status: number;
  data: any;
}

interface loginValue {
  username: string;
  password: string;
}
export const loginUser = async (userLoginData: loginValue): Promise<user> => {
  try {
    const user = await axios.post(`${baseUrl}/login`, userLoginData);
    console.log("User Data in api LoginUser Function", user);
    return user;
  } catch (err: any) {
    console.log(" login api err ", err);
    return err;
  }
};

//* For profile user check user online api clinet

export const profileUser = async () => {
  try {
    const user = await axios.get(`${baseUrl}/profile`);
    // console.log("PROFILE RESPONSE", user);

    return user.data;
  } catch (err) {
    console.log(" profile api err", err);
    return err;
  }
};

//* Logout user api clinet
export const logoutUser = async () => {
  try {
    const user = axios.post(`${baseUrl}/logout`);
    return user;
  } catch (err) {
    console.log(" logoutUser api err", err);
    return err;
  }
};
