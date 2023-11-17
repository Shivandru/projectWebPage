import React from "react";
import { Center, Stack, Button, Heading, Text, Flex } from "@chakra-ui/react";
export default function SubFooter() {
  return (
    <Flex
      w="100%"
      h={{ base: "210px", md: "310px" }}
      bg="#e6e7ea"
      justify="center"
      direction="column"
    >
      <Center>
        <Stack spacing={4} direction="row" align="center">
          <Button
            size={{ base: "md", md: "lg" }}
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
          >
            1
          </Button>

          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            1
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            8
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            4
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            3
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            4
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            3
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            7
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            7
          </Button>
          <Button
            fontSize={{ base: "24px", md: "36px" }}
            bg="#FFFFFF"
            size={{ base: "md", md: "lg" }}
          >
            1
          </Button>
        </Stack>
        <Heading fontWeight="400" fontSize={{ base: "24px", md: "36px" }}>
          kg
        </Heading>
      </Center>
      <Center
        fontSize={{ base: "16px", md: "20px" }}
        mt={{ base: "4px", md: "7px" }}
      >
        LIFTED USING GYMWOLF
      </Center>
    </Flex>
  );
}
