import React from "react";
import {
  SimpleGrid,
  Container,
  Box,
  Image,
  Heading,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import exerciseLogo from "../assets/databaseImages/asset 318.jpeg";
import chestLogo from "../assets/databaseImages/asset 319.jpeg";
import bicepsLogo from "../assets/databaseImages/asset 321.jpeg";
import tricepsLogo from "../assets/databaseImages/asset 322.jpeg";
import backLogo from "../assets/databaseImages/asset 323.jpeg";
import shoulderLogo from "../assets/databaseImages/asset 324.jpeg";
import legLogo from "../assets/databaseImages/asset 325.jpeg";
import abdominalLogo from "../assets/databaseImages/asset 326.jpeg";
import combinedLogo from "../assets/databaseImages/asset 327.jpeg";
import cardioLogo from "../assets/databaseImages/asset 328.jpeg";
import exerciseData from "../data.json";
import { useNavigate } from "react-router-dom";
export default function DatabasePage() {
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
          left={{ base: "30vw", md: "40vw" }}
          top={{ base: "15vh", md: "150px" }}
          fontSize={{ base: "36px", md: "48px" }}
          color="#FFFFFF"
          fontWeight="400px"
        >
          Exercises
        </Heading>
      </Box>
      <Container maxW="6xl" border="1px solid white" h="auto" mb="90px">
        <Button mt="20px" mr="10px" fontWeight="300">
          Exercise List
        </Button>
        <Button
          mt="20px"
          fontWeight="300"
          onClick={() => {
            navigate("/workoutPlans");
          }}
        >
          Workout plans
        </Button>
        <Text fontSize="36px" mt="30px" textAlign="center">
          Exercise List
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="30px"
          h="auto"
          w="100%"
        >
          <Box w="300px" h="260px">
            <Image src={chestLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Chest
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={bicepsLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Biceps
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={tricepsLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Triceps
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={backLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Back
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={shoulderLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Shoulder
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={legLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Legs
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={abdominalLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Abdominal
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={combinedLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Combined
              </Text>
            </Box>
          </Box>
          <Box w="300px" h="260px">
            <Image src={cardioLogo} alt="chestLogo" h="260px" w="100%" />
            <Box
              p="7px"
              fontSize="20px"
              textAlign="center"
              bg="#171923"
              position="relative"
              bottom="39"
              opacity="0.8"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: "#63B3ED",
                color: "#FFFFFF",
                transform: "translateY(-7px)",
              }}
            >
              <Text fontSize="20px" color="#FFFFFF">
                Cardio
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
        <Text fontSize="30px" mt="60px" mb="30px">
          Abdominal
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid black">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
        <Text fontSize="30px" mt="20px" mb="20px">
          Back
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid black">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
        <Text fontSize="30px" mt="20px" mb="20px">
          Biceps
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid black">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
        <Text fontSize="30px" mt="20px" mb="20px">
          Chest
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid black">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
        <Text fontSize="30px" mt="20px" mb="20px">
          Combined
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid black">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
        <Text fontSize="30px" mt="20px" mb="20px">
          Legs
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid black">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
        <Text fontSize="30px" mt="20px" mb="20px">
          Shoulder
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid black">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
        <Text fontSize="30px" mt="20px" mb="20px">
          Triceps
        </Text>
        {exerciseData.map((item, index) => (
          <Flex
            key={item.id}
            h="auto"
            width="100%"
            border="1px solid #A0AEC0"
            style={{ backgroundColor: index % 2 === 1 ? "#CBD5E0" : "#FFFFFF" }}
          >
            <Box h="60px" w="60px" border="1px solid #A0AEC0">
              <Image src={item.col1} alt="logo" w="60px" h="60px" />
            </Box>
            <Box>
              <Text fontSize="14px" ml="20px" mt="5px">
                {item.fullName}
              </Text>
              <Text fontSize="14px" ml="20px" mt="6px">
                {item.C}
              </Text>
            </Box>
          </Flex>
        ))}
      </Container>
    </>
  );
}
