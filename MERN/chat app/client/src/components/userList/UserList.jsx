import React from 'react'
import { useChatState } from "../../../context/ChatProvider";
import { Avatar, Box , Text } from '@chakra-ui/react';
export const UserList = ({user , handleFun}) => {
  // const { userProvider, setUser } = useChatState();
  return (
    <Box 
    onClick={handleFun}
    cursor='pointer'
    bg='#E8E8E8'
    _hover={{background:"#38B2AC",
  color:"white"}}

  w='100%'
  display='flex'
  alignItems='center'
  color='black'
  px={3}
  py={2}
  mb={2}
  borderRadius='lg'
    >
      <Avatar
      mr={2}
      size='sm'
      name={user.name}
      src={user.pic}
      />
<Box>
  <Text>{user.name}</Text>
  <b>Email :</b>
  <Text fontSize='xs'>{user.email}</Text>
</Box> 
    </Box>
  )
}


