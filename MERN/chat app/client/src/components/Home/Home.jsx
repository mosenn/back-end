import React, { useEffect } from "react";
import {
  Box,
  Container,
  Text,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user, "this user in home.jsx");
    if (user) navigate("/chat");
  }, [navigate]);

  return (
    <Container maxW={{ md: "550px", lg: "container.md" }}>
      <Box
        mt={15}
        textAlign={"center"}
        d="flex"
        borderRadius="2px"
        fontSize={{ base: "1.5rem" }}
      >
        <Text>Welcome to Free Chat App</Text>
      </Box>

      <Box
        p={15}
        mt={"25px"}
        borderRadius={5}
        color="black"
        fontSize={"1.5rem"}
        boxShadow={{
          base: "0px 3px 37px -3px rgb(180 180 180)",
        }}
      >
        <Tabs variant="soft-rounded" m={15}>
          <TabList
            d="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Tab
              m={{ base: "15px", md: "15px" }}
              w={{ base: "70%", md: "50%" }}
              border="1px solid #80808066"
              borderRadius={"4px"}
              bg={"white"}
              _selected={{ bg: "white" }}
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
            </Tab>
            <Tab
              bg={"white"}
              m={{ base: "0", md: "15px" }}
              w={{ base: "70%", md: "50%" }}
              border="1px solid #80808066"
              borderRadius={"4px"}
              _selected={{ bg: "white" }}
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
              Register
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* Login componet */}
              <Login />
            </TabPanel>
            <TabPanel>
              {/* Register Componet */}
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
