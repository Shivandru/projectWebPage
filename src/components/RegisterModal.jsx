import React, { useContext } from "react";
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
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { AuthContext } from "../components/LoginContext";

export default function RegisterModal(props) {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const { setUserDetails } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  if (props.isOpen !== undefined && props.isOpen !== isOpen) {
    if (props.isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    setUserDetails(formState);
  }
  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
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
          <ModalHeader>Get Started</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form id="myForm" onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="UserName"
                  type="text"
                  required
                  name="userName"
                  onChange={handleChange}
                />
              </FormControl>
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
                  placeholder="Last name"
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
              Register Yourself
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
