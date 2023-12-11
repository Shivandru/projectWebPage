import { Link } from "react-router-dom";
import asset3 from "../assets/asset 3.png";
import {
  Center,
  Flex,
  Stack,
  Button,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ModalComponent from "./ModalComponent";
import React from "react";
import { useState, useRef, useContext } from "react";
import { AuthContext } from "./LoginContext";
import RegisterModal from "./RegisterModal";
export default function Navbar() {
  const { login, userDetails } = useContext(AuthContext);
  const [flag, setFlag] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const initialRef = useRef(null);
  const registerRef = useRef(null);
  function handleFlag() {
    setFlag(true);
  }
  function handleRegister() {
    setRegisterModal(true);
  }

  return (
    <>
      <Flex
        bg="#041628"
        h="80px"
        justify="space-between"
        opacity="0.7"
        zIndex={5}
        position="fixed"
        top="0px"
        w="100%"
      >
        <Center ml="10vw">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                <img id="homeNavLogo" src={asset3} alt="homeLogo" />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        <Center mr="5vw" ml="2vw">
          <Stack direction="row" spacing={3}>
            <Button
              ref={registerRef}
              color="#FFFFFF"
              variant="link"
              onClick={handleRegister}
              _hover={{
                color: "blue.500",
              }}
            >
              Register
            </Button>
            <Button
              ref={initialRef}
              color="#FFFFFF"
              variant="link"
              _hover={{
                color: "blue.500",
              }}
              onClick={handleFlag}
            >
              {login ? userDetails.userName : "Sign In"}
            </Button>
            <Button
              color="white"
              variant="link"
              _hover={{
                color: "blue.500",
              }}
            >
              <SearchIcon />
            </Button>
          </Stack>
        </Center>
      </Flex>
      <ModalComponent
        initialRef={initialRef}
        isOpen={flag}
        onClose={() => {
          setFlag(false);
        }}
      />
      <RegisterModal
        initialRef={registerRef}
        isOpen={registerModal}
        onClose={() => {
          setRegisterModal(false);
        }}
      />
    </>
  );
}
