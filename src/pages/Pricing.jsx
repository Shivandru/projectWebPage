import React from "react";
import {
  Button,
  CardFooter,
  CardBody,
  CardHeader,
  Container,
  Center,
  Heading,
  Box,
  Flex,
  Card,
  Text,
  ListItem,
  ListIcon,
  UnorderedList,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
export default function Pricing() {
  return (
    <>
      <Container maxW="6xl" h="100vh" border="1px solid white">
        <Center mt="250px">
          <Heading
            fontSize={{ base: "18px", md: "24px", lg: "36px" }}
            fontWeight="400"
            textAlign="center"
          >
            The main features of all the Gymwolf applications (web, iOS and
            Android) are free for everyone to use. You can track your workouts,
            browse exercises, create plans and track your progress for free.
          </Heading>
        </Center>
        <Heading
          mt="35px"
          fontSize={{ base: "24px", md: "24px", lg: "36px" }}
          fontWeight="400"
          textAlign="center"
        >
          Need more? We got you covered, check below!
        </Heading>
        <Heading mt="100px" fontSize="36px" fontWeight="600" textAlign="center">
          Pricing
        </Heading>
        <Heading
          mt="30px"
          fontSize={{ base: "24px", md: "24px", lg: "36px" }}
          fontWeight="400"
          textAlign="center"
        >
          Online personal trainer + Gymwolf Pro
        </Heading>
      </Container>
      <Box h="auto" w="100%" bg="#e6e7ea">
        <Container maxW="6xl" h="100%">
          <Heading
            textAlign="center"
            fontSize={{ base: "24px", md: "24px", lg: "24px" }}
            fontWeight="400"
            pt="60px"
          >
            Gymwolf has certified personal trainers that provide you with
            customised workout plans depending on your goals. Our trainers track
            your progress, coach and motivate you daily through our web and
            smartphone app.
          </Heading>
          <Flex
            mt="30px"
            h="auto"
            justify="space-around"
            bg="#e6e7ea"
            pb="50px"
            direction={{ base: "column", md: "row", lg: "row" }}
            align={{ base: "center" }}
          >
            <Card boxShadow="lg" width={{ base: "80%", md: "31%", lg: "31%" }}>
              <CardHeader bg="#E2E8F0">
                <Box
                  clipPath="polygon(0 0, 100% 0, 100% 39%, 0 99%)"
                  h="115px"
                  bg="#975A16"
                  p="15px"
                  w="100%"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  <Heading fontSize="28px" fontWeight="500" textAlign="center">
                    BRONZE
                  </Heading>
                </Box>
                <Heading fontWeight="400" fontSize="28px" textAlign="center">
                  USD{" "}
                  <Heading as="span" fontSize="60px" color="#975A16">
                    45
                  </Heading>{" "}
                  <Heading fontWeight="400" as="span" fontSize="18px">
                    / 1 month
                  </Heading>{" "}
                </Heading>
              </CardHeader>
              <CardBody>
                <UnorderedList listStyleType="none">
                  <ListItem fontSize="18px" mt="15px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Personal workout plan
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Weekly progress reviews
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Chat with your trainer
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Gymwolf Pro features
                  </ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter m="auto">
                <Button
                  borderColor="#68D391"
                  variant="outline"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  GET YOUR TRAINER
                </Button>
              </CardFooter>
              <Text fontSize="14px" textAlign="center" mt="20px" mb="15px">
                Only 45 USD per month
              </Text>
            </Card>
            <Card
              boxShadow="lg"
              width={{ base: "80%", md: "31%", lg: "31%" }}
              mt={{ base: "4vh" }}
            >
              <CardHeader bg="#E2E8F0">
                <Box
                  clipPath="polygon(0 0, 100% 0, 100% 39%, 0 99%)"
                  h="115px"
                  bg="#ECC94B"
                  p="15px"
                  w="100%"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  <Heading fontSize="28px" fontWeight="500" textAlign="center">
                    GOLD
                  </Heading>
                </Box>
                <Heading fontWeight="400" fontSize="28px" textAlign="center">
                  USD{" "}
                  <Heading as="span" fontSize="60px" color="#ECC94B">
                    115
                  </Heading>{" "}
                  <Heading fontWeight="400" as="span" fontSize="18px">
                    / 3 months
                  </Heading>{" "}
                </Heading>
                <Text textAlign="center" fontSize="14px" mt="20px">
                  You save 20 USD
                </Text>
              </CardHeader>
              <CardBody>
                <UnorderedList listStyleType="none">
                  <ListItem fontSize="18px" mt="15px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Personal workout plan
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Monthly workout plan updates
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Weekly progress reviews
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Chat with your trainer
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Gymwolf Pro features
                  </ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter m="auto">
                <Button
                  borderColor="#68D391"
                  variant="outline"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  GET YOUR TRAINER
                </Button>
              </CardFooter>
              <Text fontSize="14px" textAlign="center" mt="20px" mb="15px">
                Only 38.33 USD per month
              </Text>
            </Card>
            <Card
              boxShadow="lg"
              width={{ base: "80%", md: "31%", lg: "31%" }}
              mt={{ base: "4vh" }}
            >
              <CardHeader bg="#E2E8F0">
                <Box
                  clipPath="polygon(0 0, 100% 0, 100% 39%, 0 99%)"
                  h="115px"
                  bg="#A0AEC0"
                  p="15px"
                  w="100%"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  <Heading fontSize="28px" fontWeight="500" textAlign="center">
                    PLATINUM
                  </Heading>
                </Box>
                <Heading fontWeight="400" fontSize="28px" textAlign="center">
                  USD{" "}
                  <Heading as="span" fontSize="60px">
                    216
                  </Heading>{" "}
                  <Heading fontWeight="400" as="span" fontSize="18px">
                    / 6 months
                  </Heading>{" "}
                </Heading>
                <Text textAlign="center" fontSize="14px" mt="20px">
                  You save 54 USD
                </Text>
              </CardHeader>
              <CardBody>
                <UnorderedList listStyleType="none">
                  <ListItem fontSize="18px" mt="15px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Personal workout plan
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Monthly workout plan updates
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Weekly progress reviews
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Chat with your trainer
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Gymwolf Pro features
                  </ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter m="auto">
                <Button
                  borderColor="#68D391"
                  variant="outline"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  GET YOUR TRAINER
                </Button>
              </CardFooter>
              <Text fontSize="14px" textAlign="center" mt="20px" mb="15px">
                Only 36 USD per month
              </Text>
            </Card>
          </Flex>
        </Container>
      </Box>
      <Heading fontSize="31px" textAlign="center" fontWeight="400" mt="60px">
        Gymwolf Pro
      </Heading>
      <Box
        w="100%"
        h="auto"
        mb="50px"
        display="flex"
        justifyContent="space-around"
        align="center"
      >
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: "10px", md: "20px", lg: "30px" }}
          mt={{ base: "20px", md: "30px" }}
          ml={{ base: "20px", md: "50px", lg: "5vw" }}
        >
          <Box w="325px" h="210px">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/2311/2311512.png"
              w="100px"
              m="auto"
            />
            <Text textAlign="center" fontSize="20px">
              Export your workouts
            </Text>
            <Text textAlign="center" fontSize="14px" mt="10px">
              Download a single workout or all of your workouts as an Excel
              spreadsheet.
            </Text>
          </Box>
          <Box w="325px" h="210px">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/465/465286.png"
              w="100px"
              m="auto"
              mt="10px"
            />
            <Text textAlign="center" fontSize="20px" mt="10px">
              Advanced charts
            </Text>
            <Text textAlign="center" fontSize="14px" mt="10px">
              Get advanced progress charts for Body Mass Index, Maximum Weight
              and more.
            </Text>
          </Box>
          <Box w="325px" h="210px">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/2370/2370264.png"
              w="100px"
              m="auto"
              mt="10px"
            />
            <Text textAlign="center" fontSize="20px">
              Flexible workout plans
            </Text>
            <Text textAlign="center" fontSize="14px" mt="10px">
              Create new workout plans from any gym workout - choose your own,
              or someone else's workout.
            </Text>
          </Box>
          <Box w="325px" h="210px">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/69/69182.png"
              w="100px"
              m="auto"
              mt="10px"
            />
            <Text textAlign="center" fontSize="20px">
              Compare workouts
            </Text>
            <Text textAlign="center" fontSize="14px" mt="10px">
              Get weekly/monthly summary and compare the results of single
              workouts, weeks or months.
            </Text>
          </Box>
          <Box w="325px" h="210px">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/12639/12639968.png"
              w="100px"
              m="auto"
            />
            <Text textAlign="center" fontSize="20px">
              Calculators
            </Text>
            <Text textAlign="center" fontSize="14px" mt="10px">
              New calculators for Body Fat, Body Mass Index, Basal Metabolic
              Rate and more.
            </Text>
          </Box>
          <Box w="325px" h="210px">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3772/3772059.png"
              w="100px"
              m="auto"
            />
            <Text textAlign="center" fontSize="20px">
              Enjoy the PRO status
            </Text>
            <Text textAlign="center" fontSize="14px" mt="10px">
              We value our PRO members: you get the PRO member sign and Gymwolf
              will remain ad-free for you.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box h="auto" w="100%" bg="#e6e7ea">
        <Heading fontWeight="500" textAlign="center" fontSize="21px" pt="30px">
          Access all the features of Gymwolf, upgrade to Gymwolf PRO now.
        </Heading>
        <Container maxW="6xl" h="100%">
          <Flex
            mt="30px"
            h="auto"
            justify="space-around"
            bg="#e6e7ea"
            pb="50px"
            direction={{ base: "column", md: "row", lg: "row" }}
            align={{ base: "center" }}
          >
            <Card
              boxShadow="lg"
              width={{ base: "80%", md: "31%", lg: "31%" }}
              mt={{ base: "4vh" }}
            >
              <CardHeader bg="#E2E8F0">
                <Box
                  clipPath="polygon(0 0, 100% 0, 100% 39%, 0 99%)"
                  h="115px"
                  bg="#975A16"
                  p="15px"
                  w="100%"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  <Heading fontSize="28px" fontWeight="500" textAlign="center">
                    1 MONTH
                  </Heading>
                </Box>
                <Heading fontWeight="400" fontSize="28px" textAlign="center">
                  USD{" "}
                  <Heading as="span" fontSize="60px">
                    5
                  </Heading>{" "}
                  <Heading fontWeight="400" as="span" fontSize="18px">
                    / 1 month
                  </Heading>{" "}
                </Heading>
              </CardHeader>
              <CardBody>
                <UnorderedList listStyleType="none">
                  <ListItem fontSize="18px" mt="15px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Export your workouts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Advanced charts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Flexible workout plans
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Compare workouts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Calculators
                  </ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter m="auto">
                <Button
                  borderColor="#68D391"
                  variant="outline"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  GET GYMWOLF PRO
                </Button>
              </CardFooter>
              <Text fontSize="14px" textAlign="center" mt="20px" mb="15px">
                Only 5 USD per month
              </Text>
            </Card>
            <Card
              boxShadow="lg"
              width={{ base: "80%", md: "31%", lg: "31%" }}
              mt={{ base: "4vh" }}
            >
              <CardHeader bg="#E2E8F0">
                <Box
                  clipPath="polygon(0 0, 100% 0, 100% 39%, 0 99%)"
                  h="115px"
                  bg="#ECC94B"
                  p="15px"
                  w="100%"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  <Heading fontSize="28px" fontWeight="500" textAlign="center">
                    3 MONTHS
                  </Heading>
                </Box>
                <Heading fontWeight="400" fontSize="28px" textAlign="center">
                  USD{" "}
                  <Heading as="span" fontSize="60px">
                    13
                  </Heading>{" "}
                  <Heading fontWeight="400" as="span" fontSize="18px">
                    / 3 months
                  </Heading>{" "}
                </Heading>
                <Text textAlign="center" fontSize="14px" mt="20px">
                  You save 2 USD
                </Text>
              </CardHeader>
              <CardBody>
                <UnorderedList listStyleType="none">
                  <ListItem fontSize="18px" mt="15px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Export your workouts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Advanced charts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Flexible workout plans
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Compare workouts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Calculators
                  </ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter m="auto">
                <Button
                  borderColor="#68D391"
                  variant="outline"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  GET GYMWOLF PRO
                </Button>
              </CardFooter>
              <Text fontSize="14px" textAlign="center" mt="20px" mb="15px">
                Only 4.33 USD per month
              </Text>
            </Card>
            <Card
              boxShadow="lg"
              width={{ base: "80%", md: "31%", lg: "31%" }}
              mt={{ base: "4vh" }}
            >
              <CardHeader bg="#E2E8F0">
                <Box
                  clipPath="polygon(0 0, 100% 0, 100% 39%, 0 99%)"
                  h="115px"
                  bg="#A0AEC0"
                  p="15px"
                  w="100%"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  <Heading fontSize="28px" fontWeight="500" textAlign="center">
                    6 MONTHS
                  </Heading>
                </Box>
                <Heading fontWeight="400" fontSize="28px" textAlign="center">
                  USD{" "}
                  <Heading as="span" fontSize="60px">
                    24
                  </Heading>{" "}
                  <Heading fontWeight="400" as="span" fontSize="18px">
                    / 6 months
                  </Heading>{" "}
                </Heading>
                <Text textAlign="center" fontSize="14px" mt="20px">
                  You save 6 USD
                </Text>
              </CardHeader>
              <CardBody>
                <UnorderedList listStyleType="none">
                  <ListItem fontSize="18px" mt="15px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Export your workouts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Advanced charts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Flexible workout plans
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Compare workouts
                  </ListItem>
                  <ListItem fontSize="18px" mt="25px">
                    <ListIcon as={CheckIcon} color="#A0AEC0" />
                    Calculators
                  </ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter m="auto">
                <Button
                  borderColor="#68D391"
                  variant="outline"
                  _hover={{
                    background: "#68D391",
                    color: "#FFFFFF",
                  }}
                >
                  GET GYMWOLF PRO
                </Button>
              </CardFooter>
              <Text fontSize="14px" textAlign="center" mt="20px" mb="15px">
                Only 4 USD per month
              </Text>
            </Card>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
