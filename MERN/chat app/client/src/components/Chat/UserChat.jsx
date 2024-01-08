import { useState, useEffect } from "react";
import { getUsersChats } from "../../services/chatapi";
import { Button, ButtonGroup, Box, Flex } from "@chakra-ui/react";
import { useChatState } from "../../../context/ChatProvider";
import { Sidebar } from "../Sidebar/Sidebar";
import { ChatBox } from "../chatBox/ChatBox";
import { MyChat } from "../MyChat/MyChat";
export const UserChat = () => {
  const [chats, SetChats] = useState([]);

  const { userProvider, setUser } = useChatState();

  return (
    <div
      style={{
        width: "100%",
        background: "skyblue",
        height: "100vh",
      }}
      bg="blue"
      h="100vh"
    >
      <h1> chat Pages</h1>
      <Sidebar />
      <Flex bg="gray" justify="space-between" align="center" p="15px">
        
     <MyChat />
        
         <ChatBox />
        

      </Flex>
    </div>
  );
};
