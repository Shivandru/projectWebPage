import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
export default function Contact() {
  return (
    <Box ml="150px" h="450px" w="100%" border="1px solid white">
      <Box mt="120px">
        <Heading fontWeight="500" fontSize="36px">
          Gymwolf - Contact
        </Heading>
      </Box>
      <Box mt="30px">
        <Text fontSize="21px" fontWeight="600">
          Gymwolf OÜ
        </Text>
        <Text fontSize="21px" fontWeight="200">
          Narva mnt 9
        </Text>
        <Text fontSize="21px" fontWeight="200">
          Tartu, Estonia, 51009
        </Text>
      </Box>
      <Box mt="40px">
        <Text fontSize="21px" fontWeight="600">
          E-mail
        </Text>
        <Text fontSize="21px" fontWeight="200" color="#428BCA">
          info@gymwolf.com
        </Text>
      </Box>
    </Box>
  );
}
