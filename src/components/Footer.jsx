import React from "react";
import {
  BreadcrumbLink,
  BreadcrumbItem,
  Breadcrumb,
  Flex,
  Box,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import googleLogo from "../assets/asset 0.png";
import appleLogo from "../assets/asset 1.png";
import facebookLogo from "../assets/asset 2.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Flex bg="#26a9e1" w="100%" h="375px" direction="column">
      <Flex
        h="275px"
        width="70%"
        margin="auto"
        direction="row"
        justify="space-around"
        flexWrap="wrap" // Allow items to wrap to the next line on smaller screens
      >
        <Box mt={{ base: "20px", md: "70px" }}>
          <Heading size="sm">ABOUT</Heading>

          <Breadcrumb mt="20px">
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={{ base: "16px", md: "18px" }}
                color="#FFFFFF"
                as={Link}
                to="/about"
              >
                About us
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb mt="10px">
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={{ base: "16px", md: "18px" }}
                color="#FFFFFF"
                as={Link}
                to="/contact"
              >
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box mt={{ base: "20px", md: "70px" }}>
          <Heading size="sm">LEGAL</Heading>
          <Breadcrumb mt="20px">
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={{ base: "16px", md: "18px" }}
                color="#FFFFFF"
                as={Link}
                to="/termsOfService"
              >
                Terms of Service
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb mt="10px">
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={{ base: "16px", md: "18px" }}
                color="#FFFFFF"
                as={Link}
                to="/privacy"
              >
                Privacy
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb mt="10px">
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={{ base: "16px", md: "18px" }}
                color="#FFFFFF"
                as={Link}
                to="/pricing"
              >
                Pricing
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box mt={{ base: "20px", md: "70px" }}>
          <Heading size="sm">Get the app</Heading>
          <Image
            src={googleLogo}
            width={{ base: "90px", md: "135px" }}
            mt="20px"
          />
          <Image
            src={appleLogo}
            width={{ base: "90px", md: "135px" }}
            mt="20px"
          />
        </Box>
        <Box mt={{ base: "20px", md: "70px" }}>
          <Heading size="sm">SOCIAL</Heading>
          <Image
            src={facebookLogo}
            width={{ base: "32px", md: "42px" }}
            mt="20px"
          />
        </Box>
        <Box mt={{ base: "20px", md: "70px" }}>
          <Heading size="sm">LANGUAGE</Heading>
          <Text
            mt="20px"
            color="#FFFFFF"
            fontSize={{ base: "16px", md: "18px" }}
          >
            Eesti keeles
          </Text>
        </Box>
      </Flex>
      <Box h="100px" width="70%" borderTop="1px solid #FFFFFF" margin="auto">
        <Text color="#FFFFFF" mt="20px" ml="15px">
          Copyright © Gymwolf OÜ. All Rights Reserved. E-mail: info@gymwolf.com
        </Text>
      </Box>
    </Flex>
  );
}
