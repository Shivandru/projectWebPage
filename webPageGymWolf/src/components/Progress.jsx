import React from "react";
import {
  Text,
  Center,
  Flex,
  Box,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import progressLogo from "../assets/asset 6.png";
import { useNavigate } from "react-router-dom";
export default function Progress() {
  const navigate = useNavigate();
  return (
    <>
      <Flex h="360px" w="100%" direction={{ base: "column", md: "row" }}>
        <Center h={{ base: "50%", md: "100%" }} w={{ base: "100%", md: "50%" }}>
          <Image
            src={progressLogo}
            alt="progressLogo"
            maxH={{ base: "0px", md: "300px" }}
          />
        </Center>
        <Box
          h="100%"
          w={{ base: "100%", md: "50%" }}
          ml={{ base: "0", md: "-80px" }}
        >
          <Heading fontSize={{ base: "28px", md: "36px" }} mt="20px">
            See your progress
          </Heading>
          <Text fontSize={{ base: "16px", md: "20px" }} mt="25px">
            Gymwolf provides different graphs that help you track your progress.
            There are graphs for gym workouts, cardio workouts and bodyweight.
            The graphs are highly customizable: you can select the date range,
            exercise and group the results by month, week or single workout.
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
              navigate("/progress");
            }}
          >
            Take a tour
          </Button>
        </Box>
      </Flex>
    </>
  );
}
