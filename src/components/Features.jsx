import {
  Center,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import featureImg from "../assets/asset 5.png";
import { useNavigate } from "react-router-dom";
export default function Features() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        w="100%"
        h={{ base: "auto", md: "auto" }}
        mt="50px"
        direction={{ base: "column", md: "row" }}
        mb={{ base: "5vh", md: "20vh" }}
        align="center"
      >
        <Box
          h="100%"
          w={{ base: "100%", md: "50%" }}
          ml={{ base: "0", md: "10vw" }}
        >
          <Heading fontSize={{ base: "28px", md: "36px" }} mb="25px">
            Features
          </Heading>
          <Text fontSize={{ base: "16px", md: "20px" }}>
            Gymwolf is a workout tracking tool. Add workouts, create your own
            customized workout plans or find suitable plan from other users.
            Accomplish your goals with motivation from personal trainer and
            committed training.
          </Text>
          <Button
            bg="#26a9e1"
            variant="solid"
            color="white"
            mt="30px"
            h={{ base: "50px", md: "60px" }}
            w={{ base: "30%", md: "300px" }}
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight="100"
            _hover={{
              background: "#2A4365",
              color: "white",
            }}
            onClick={() => {
              navigate("/features");
            }}
          >
            Take a tour
          </Button>
        </Box>
        <Center
          h="100%"
          w={{ base: "100%", md: "50%" }}
          ml={{ base: "0", md: "100px" }}
        >
          <Image
            src={featureImg}
            alt="feature Logo"
            maxH={{ base: "0px", md: "300px" }}
            pr="5vw"
          />
        </Center>
      </Flex>
    </>
  );
}
