import React from "react";
import {
  Center,
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
export default function AboutUs() {
  return (
    <Container maxW="6xl" height="auto" border="1px solid white" mb="2vh">
      <Box mt="150px" width="100%" borderBottom="1px solid #E2E8F0">
        <Heading mb="20px">About Gymwolf</Heading>
      </Box>
      <Center mt="20px" h="auto" w="100%" bg="#eeeeee">
        <Text fontSize="21px" padding="48px 60px">
          Our goal is to make people happy and fit, to offer them the simplest
          way to track workouts and to communicate with personal trainer.
        </Text>
      </Center>
      <Flex mt="30px" justify="space-around">
        <Box>
          <Heading fontSize="30px" fontWeight="300px">
            Our Team
          </Heading>
          <Text fontSize="lg" mt="18px">
            Raigo Häelme
          </Text>
          <Text fontSize="sm" mt="10px">
            Product Owner
          </Text>
          <Text fontSize="lg" mt="18px">
            Mustafa Ogün Öztürk
          </Text>
          <Text fontSize="sm" mt="10px">
            Android Developer
          </Text>
          <Text fontSize="lg" mt="18px">
            Indrek Ulst
          </Text>
          <Text fontSize="sm" mt="10px">
            CTO, Founder
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" mt="45px">
            Sandor Torn
          </Text>
          <Text fontSize="sm" mt="10px">
            Designer
          </Text>
          <Text fontSize="lg" mt="18px">
            Mari Holopainen
          </Text>
          <Text fontSize="sm" mt="10px">
            QA
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" mt="45px">
            Evgeny Zborovsky
          </Text>
          <Text fontSize="sm" mt="10px">
            iOS Developer
          </Text>
          <Text fontSize="lg" mt="18px">
            Siim Kinnas
          </Text>
          <Text fontSize="sm" mt="10px">
            Sales and Marketing
          </Text>
        </Box>
      </Flex>
      <Flex direction="column">
        <Center>
          <Text fontSize="21px" mt="50px" fontWeight="100">
            If you have any feedback or suggestions, then feel free to contact
            us at info@gymwolf.com
          </Text>
        </Center>
        <Center mt="20px">
          <Button
            bg="#428bca"
            color="#FFFFFF"
            padding="6px 12px"
            w="80px"
            _hover={{
              background: "#2B6CB0",
              color: "#FFFFFF",
            }}
          >
            Contact
          </Button>
        </Center>
      </Flex>
    </Container>
  );
}
