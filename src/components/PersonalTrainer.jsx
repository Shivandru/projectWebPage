import { Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import React from "react";
import personalTrainerImg from "../assets/asset 4.jpeg";
import { useNavigate } from "react-router-dom";
export default function PersonalTrainer() {
  const navigate = useNavigate();
  return (
    <Flex
      bg="#26a9e1"
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "initial" }}
    >
      <Box
        width={{ base: "100%", md: "35%" }}
        ml={{ base: "0", md: "166px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading
          mt={{ base: "4", md: "88px" }}
          color="white"
          fontSize={{ base: "28px", md: "36px" }}
        >
          Online personal trainer
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "20px" }}
          mt={{ base: "20px", md: "30px" }}
        >
          Gymwolf has certified personal trainers that provide you with
          customised workout plans depending on your goals. Our trainers track
          your progress, coach and motivate you daily through our web and
          smartphone app.
        </Text>
        <Button
          bg="black"
          variant="solid"
          color="white"
          mb="50px"
          mt={{ base: "20px", md: "30px" }}
          h="60px"
          w={{ base: "50%", md: "300px" }}
          fontSize="20px"
          fontWeight="100"
          _hover={{
            background: "#2A4365",
            color: "white",
          }}
          onClick={() => {
            navigate("/personalTrainer");
          }}
        >
          Learn more
        </Button>
      </Box>
      <Box
        bgImage={personalTrainerImg}
        bgPosition="center"
        bgRepeat="no-repeat"
        h={{ base: "0px", md: "500px" }}
        w={{ base: "100%", md: "50%" }}
        mt={{ base: "20px", md: "0" }}
      ></Box>
    </Flex>
  );
}
