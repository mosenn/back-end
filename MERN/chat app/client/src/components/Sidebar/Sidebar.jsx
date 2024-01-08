import {
  Button,
  Box,
  Tooltip,
  Text,
  Flex,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useToast,
  Spinner 
  
} from "@chakra-ui/react";

import { BellIcon, TriangleDownIcon } from "@chakra-ui/icons"
import { useChatState } from "../../../context/ChatProvider";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { ProfileModel } from "../ProfileModel/ProfileModel";
import { useNavigate } from "react-router-dom";
import { ChatLoading } from "../ChatLoading/ChatLoading";
import { UserList } from "../userList/UserList";
import axios from 'axios';
export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSerachResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {
    userProvider,
    setUser,
    setSelectChat,
    selectChat,
    userChat,
    setUserChat } = useChatState();
  // console.log(userProvider);
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  const toast = useToast();
  const handleSearch = async () => {
    if (!search || search === '') {
      toast({
        title: "Enter someting in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${userProvider.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:3000/?search=${search}`,
        config
      );
      // console.log(data , 'data')
      setLoading(false);
      setLoadingChat(false)
      setSerachResult(data);
    } catch (err) { 
      setLoadingChat(true)
      toast({
        title: "cant Fetch chats",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
  console.log(err)
    }
  };

  const accessChat = async (userId) => {
    try {

      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userProvider.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:3000/chat`,
        {userId},
        config
      );
      const findChat = userChat?.find((c)=>c._id === data._id)
      if(!findChat) {
        // setUserChat([data ,...userChat ])
        setUserChat([data ,...userChat ])
      }
      // console.log(userChat , 'userChat')
      setSelectChat(data)
      setLoading(false)
      setLoadingChat(false)
      // onClose()
    } catch (err) {
      console.log(err);
      toast({
        title: "cant post chats",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        bg="white"
        w="100%"
        border="2px solid gray"
        p="5px 10px 5px 10px"
      >
        <Tooltip
          spacing="5px"
          label="search users to chat"
          hasArrow
          placement="bottom-end"
          p="5px"
          ml="10px"
        >
          <Button variant="ghost" p="5px" my="15px" onClick={onOpen}>
            <FcSearch fontSize="30px" />
            <Text display={{ base: "none", md: "flex" }} px="4px" m="5px">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2x1" fontFamily="Work sans">
          Chat App
        </Text>
        <div>
          <Menu>
            <MenuButton>
              <BellIcon m={1} fontSize="2x1" />
              {/* <MenuList></MenuList> */}
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
              <Avatar
                size="sm"
                cruser="pointer"
                name={userProvider?.name}
                src={userProvider?.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModel userProvider={userProvider}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModel>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Search users</DrawerHeader>
          <DrawerBody>
            <Flex>
              <Input
                mr="5px"
                placeholder="search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></Input>
              <Button onClick={handleSearch}>Go</Button>
            </Flex>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((items) => {
                return (
                  <UserList
                    key={items._id}
                    user={items}
                    handleFun={() => accessChat(items._id)}
                  ></UserList>
                );
              })
            )}
            {loadingChat && <Spinner size='xl' />}
          </DrawerBody>
        </DrawerContent>

      </Drawer>
    </div>
  );
};
