import React,{useState , useEffect} from 'react'
import { useChatState } from "../../../context/ChatProvider";
import {useToast}  from "@chakra-ui/react";
export const MyChat = () => {
  const toast = useToast();
  const [loggedUser , setLoggedUser] = useState();
  const { 
    userProvider,
    setUser,
    setSelectChat,
    selectChat,
    userChat,
    setUserChat
  
  } = useChatState();

 const fetchChats = async () => {
  try {
    const config = {
      headers:{ 
        "Content-Type":"application/json",
        Authorization:`Bearer ${userProvider?.token}`
      }
    }
    const {data} = await axios.get(`http://localhost:3000/chat`,config)
    console.log(data , 'mychat log')
    setUserChat(data)
  }catch(err) {
    toast({
      title: "cant Fetch chats",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "bottom-left",
    });
  }
 }
 useEffect(()=> {
  setLoggedUser(JSON.parse(localStorage.getItem('userInfo')));
  fetchChats();
},[])
 console.log(userChat , 'mychat log')
  return (
    <div>MyChat</div>
  )
}
