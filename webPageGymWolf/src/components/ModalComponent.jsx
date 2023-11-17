import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AuthContext } from "./LoginContext";
export default function ModalComponent(props) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const { login, setLogin, userDetails } = useContext(AuthContext);
  const [formState, setFormState] = useState({ email: "", password: "" });
  if (props.isOpen !== undefined && props.isOpen !== isOpen) {
    if (props.isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (
      formState.email == userDetails.email &&
      formState.password == userDetails.password
    ) {
      setLogin(true);
      successToast();
    } else {
      setLogin(false);
    }
  }
  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }
  function successToast() {
    return toast({
      title: "Logged In",
      description: "You have successfully logged in.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  return (
    <>
      <Modal
        initialFocusRef={props.initialRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign-in your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form id="myForm" onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Email"
                  type="email"
                  required
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  required
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              m="auto"
              form="myForm"
              type="submit"
            >
              Sign In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
