import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import dataLogo from "../assets/asset 7.png";
import { useNavigate } from "react-router-dom";
export default function Database() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        w="100%"
        h={{ base: "auto", md: "auto" }}
        mt="50px"
        mb={{ base: "5vh", md: "20vh" }}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Box
          h="100%"
          w={{ base: "100%", md: "50%" }}
          ml={{ base: "0", md: "2vw" }}
        >
          <Heading fontSize={{ base: "28px", md: "36px" }} mb="25px">
            Database with 300+ exercises
          </Heading>
          <Text fontSize={{ base: "16px", md: "20px" }}>
            Gymwolf has a database with over 300 exercises. The exercises come
            with detailed descriptions, tips and step-by-step images. If you
            don't find a exercise from our database, then you can also add your
            own exercises.
          </Text>
          <Button
            bg="#26a9e1"
            variant="solid"
            color="white"
            mt="30px"
            h="60px"
            w={{ base: "30%", md: "300px" }}
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight="100"
            _hover={{
              background: "#2A4365",
              color: "white",
            }}
            onClick={() => {
              navigate("/database");
            }}
          >
            Check out
          </Button>
        </Box>
        <Center
          h="100%"
          w={{ base: "100%", md: "50%" }}
          ml={{ base: "0", md: "100px" }}
        >
          <Image
            src={dataLogo}
            alt="feature Logo"
            maxH={{ base: "0px", md: "300px" }}
          />
        </Center>
      </Flex>
    </>
  );
}
