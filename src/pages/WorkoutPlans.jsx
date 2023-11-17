import React from "react";
import exerciseLogo from "../assets/databaseImages/asset 318.jpeg";
import {
  Input,
  Box,
  Image,
  Heading,
  Container,
  Button,
  Text,
  Select,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import wolfLogo from "../assets/wolf.jpg";
import exerciseData from "../data.json";
export default function WorkoutPlans() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        w="100%"
        h={{ base: "auto", md: "300px" }}
        border="2px solid white"
        position="relative"
      >
        <Image
          src={exerciseLogo}
          alt="exerciseLogo"
          mt="78px"
          h={{ base: "150px", md: "230px" }}
          w="100%"
        />
        <Heading
          position={{ base: "absolute", md: "absolute" }}
          left={{ base: "300px", md: "650px" }}
          top={{ base: "100px", md: "150px" }}
          fontSize={{ base: "36px", md: "48px" }}
          color="#FFFFFF"
          fontWeight="400px"
        >
          Exercises
        </Heading>
      </Box>
      <Container maxW="6xl" border="1px solid white" h="auto" mb="90px">
        <Button
          mt="20px"
          mr="10px"
          fontWeight="300"
          onClick={() => {
            navigate("/database");
          }}
        >
          Exercise List
        </Button>
        <Button mt="20px" fontWeight="300">
          Workout plans
        </Button>
        <Box borderBottom="1px solid #A0AEC0" w="100%">
          <Text fontSize="36px" mt="30px" mb="20px">
            Popular workout plans
          </Text>
        </Box>
        <Flex justifyContent="flex-end" gap="10px" mb="50px">
          <Input
            placeholder="search muscle group..."
            border="1px solid black"
            type="text"
            mt="20px"
            h="40px"
            w="200px"
          />
          <Select placeholder="Muscle group" h="40px" w="150px" mt="20px">
            <option value="chest">chest</option>
            <option value="biceps">biceps</option>
            <option value="triceps">triceps</option>
            <option value="back">back</option>
            <option value="shoulder">shoulder</option>
            <option value="legs">legs</option>
            <option value="abdominal">abdominal</option>
            <option value="combined">combined</option>
          </Select>
          <Button w="90px" h="40px" mt="20px" bg="#63B3ED" color="#FFFFFF">
            Search
          </Button>
        </Flex>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            mb="10px"
            bg={index % 2 == 0 ? "#CBD5E0" : "#FFFFFF"}
          >
            <Image src={wolfLogo} w="80px" h="80px" />
            <Box>
              <Text ml="7px" mt="10px">
                {item.fullName}
              </Text>
              <Text ml="7px">{item.C}</Text>
            </Box>
          </Flex>
        ))}
      </Container>
    </>
  );
}
