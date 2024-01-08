import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useChatState } from "../../../context/ChatProvider";
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
export const Login = () => {
  const { userProvider, setUser } = useChatState();

  console.log(JSON.parse(localStorage.getItem("userInfo")));
  const navigate = useNavigate();
  const toast = useToast();
  let [user, SetUser] = useState({
    Email: "",
    userName: "",
    Password: "",
  });
  const [showPass, SetShowPass] = useState();

  const takeInfoFromUser = (inputs) => {
    SetUser({ ...user, [inputs.target.name]: inputs.target.value });
    // console.log(user, "takeInfoFromUser");
    // console.log(inputs.target.value, "input value");
  };

  const changeTypePass = () => {
    SetShowPass(!showPass);
  };

  const handelSubmitLogin = async (e) => {
    e.preventDefault();
    console.log("hi");
    // console.log(user, "handelSubmitLogin");

    try {
      const userPost = await axios({
        method: "post",
        url: "http://localhost:3000/loginUser",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
          Password: user.Password,
          email: user.Email,
        }),
      });
      //* user login log
      // console.log(JSON.stringify(userPost.data));
      const response = userPost.data;
      console.log(response);
      localStorage.setItem("userInfo", JSON.stringify(response));
      // const userinfo = JSON.parse(localStorage.getItem("userInfo"));
      // console.log(userinfo, "button submit");
      // setUser(userinfo);

      // setUser(response);

      if (response.email !== "guset@gmail.com") {
        toast({
          title: "welcome",
          description: `${response.email} in 3s ago u are join chat`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
      if (userPost?.data?.token) {
        setTimeout(() => {
          navigate("/chat");
        }, 3000);
      }
    } catch (err) {
      // console.log(err.response.data);
      // console.log(err.response.status);
      toast({
        title: err.response.status,
        description: err.response.data,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    //*post user state to database
    //*save someting to localstroge
  };

  const Loginguset = () => {
    // console.log(user, "this happen in guset function");

    user = {
      Email: "guset@gmail.com",
      Password: "guset12345",
      userName: "guset",
    };
    console.log(user, "Loginguset");
    if (user.Email === "guset@gmail.com") {
      toast({
        title: "guset@gmail.com",
        description: "in 3s you are join chat with guset member",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    }
    localStorage.setItem("userInfo", JSON.stringify(user));
    // const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userinfo, "button guset memeber");
    // setUser(userinfo);
    setTimeout(() => {
      navigate("/chat");
    }, 3000);
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo, "after");
  return (
    <div>
      <form action="" onSubmit={handelSubmitLogin}>
        <VStack color="black">
          <FormControl>
            <FormLabel>username</FormLabel>
            <Input
              value={user.userName}
              name="userName"
              variant="filled"
              size="md"
              focusBorderColor="green.200"
              onChange={(e) => {
                takeInfoFromUser(e);
              }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>email</FormLabel>
            <Input
              name="Email"
              variant="filled"
              size="md"
              value={user.Email}
              focusBorderColor="green.200"
              onChange={(e) => {
                takeInfoFromUser(e);
              }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>password</FormLabel>
            <Input
              value={user.Password}
              name="Password"
              variant="filled"
              size="md"
              focusBorderColor="green.200"
              onChange={(e) => {
                takeInfoFromUser(e);
              }}
              type={showPass ? "text" : "password"}
            ></Input>
          </FormControl>
          <Button
            type="submit"
            m={{ base: "15px", md: "15px" }}
            w={{ base: "70%", md: "50%" }}
            border="1px solid #80808066"
            borderRadius={"4px"}
            _focus={{
              boxShadow: "none",
              border: "1px solid #80808066",
              outline: "none",
              bg: "#9ED5C5",
              color: "black",
            }}
            _hover={{
              bg: "#9ED5C5",
              border: "1px solid #80808066",
              color: "black",
            }}
          >
            Login
          </Button>
          <Button
            onClick={Loginguset}
            type="submit"
            m={{ base: "15px", md: "15px" }}
            w={{ base: "70%", md: "50%" }}
            border="1px solid #80808066"
            borderRadius={"4px"}
            _focus={{
              boxShadow: "none",
              border: "1px solid #80808066",
              outline: "none",
              bg: "#9ED5C5",
              color: "black",
            }}
            _hover={{
              bg: "#9ED5C5",
              border: "1px solid #80808066",
              color: "black",
            }}
          >
            are you guset member ?
          </Button>
        </VStack>
      </form>
    </div>
  );
};
