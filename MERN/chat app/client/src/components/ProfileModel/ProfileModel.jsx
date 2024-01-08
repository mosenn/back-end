import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { ViewIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";

export const ProfileModel = ({ userProvider, children }) => {
  //   console.log(userProvider, "user provider in profilemodel");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <div>
          <span onClick={onOpen}>{children}</span>
          <p>{userProvider?.name}</p>
        </div>
      ) : (
        <IconButton
          display={"flex"}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader text="center">
            <Center fontSize="30px" m="20px">
              {userProvider?.name}
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="center" align="center" direction="column">
              <Image
                boxSize="150px"
                src={userProvider?.pic}
                alt={userProvider?.pic}
              />
              <Text fontWeight="bold" mb="1rem" fontSize="30px">
                {userProvider?.email}
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
