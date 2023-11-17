import React from "react";
import {
  Box,
  Image,
  Flex,
  Heading,
  Center,
  Container,
  Text,
  Button,
  CardFooter,
  CardBody,
  CardHeader,
  Card,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import trainerImg from "../assets/asset 4.jpeg";
import SubFooter from "../components/SubFooter";
export default function OnlinePersonalTrainer() {
  return (
    <>
      <Flex w="100%" h="325px" border="1px solid black" bg="#26a9e1">
        <Center h="100%" w="65%">
          <Heading color="#FFFFFF" fontSize="48px" ml="200px">
            Online personal trainer
          </Heading>
        </Center>
        <Image src={trainerImg} alt="trainerLogo" h="100%" w="35%" />
      </Flex>
      <Container maxW="6xl" border="1px solid white" h="auto">
        <Box w="100%" h="120px" borderBottom="2px solid #26a9e1">
          <Text
            textAlign="center"
            fontSize={{ base: "16px", md: "20px" }}
            mt={{ base: "20px", md: "40px" }}
          >
            Gymwolf has certified personal trainers that provide you with
            customised workout plans depending on your goals. Our trainers track
            your progress, coach and motivate you daily through our web and
            smartphone app.
          </Text>
        </Box>
        <Heading textAlign="center" mt="30px" fontSize="36px" fontWeight="500">
          Our trainers
        </Heading>
        <Flex
          mt="30px"
          w="100%"
          h={{ base: "auto", md: "315px" }}
          direction={{ base: "column", md: "row" }}
        >
          <Image
            src="http://gymwolf.com/user_images/0db67d7bc0ced122b636098c6c7b6c9b_1530024726.jpg"
            alt="trainerLogo"
            w={{ base: "200px", md: "320px" }}
            h={{ base: "200px", md: "320px" }}
            m={{ base: "auto" }}
            ml={{ md: "0px" }}
          />
          <Box
            w={{ base: "100%", md: "60%" }}
            h="100%"
            ml={{ base: "0", md: "40px" }}
          >
            <Heading fontSize={{ base: "24px", md: "30px" }} fontWeight="500">
              Siim Savisaar
            </Heading>
            <Text fontSize={{ base: "16px", md: "18px" }} mt="15px">
              Siim is a university-trained practising physiotherapist, personal
              trainer and a world-class bodybuilder. He’s a strong believer in
              what doesn’t challenge you, won’t change you. Thus, you should
              expect to be challenged if you work with him. Siim has extensive
              experience, from working with people with special needs to
              training elite athletes from freestyle skiing to bodybuilding and
              bikini fitness. His speciality is physical conditioning along with
              strength and hypertrophy programs.
            </Text>
            <Button
              color="#FFFFFF"
              bg="#2ecc71"
              fontSize={{ base: "18px", md: "20px" }}
              h="60px"
              w="220px"
              mt="18px"
              _hover={{
                background: "#276749",
                color: "#FFFFFF",
              }}
            >
              Choose this trainer
            </Button>
          </Box>
        </Flex>
        <Flex
          mt={{ base: "4", md: "60px" }}
          w="100%"
          h={{ base: "auto", md: "320px" }}
          direction={{ base: "column", md: "row" }}
        >
          <Image
            src="http://gymwolf.com/user_images/a0e65be4dba72b3d37d0e490a8173d73_1596110163.jpg"
            alt="trainerLogo"
            w={{ base: "200px", md: "200px" }}
            h={{ base: "300px", md: "300px" }}
            m={{ base: "auto" }}
            ml={{ md: "0px" }}
          />
          <Box
            w={{ base: "100%", md: "60%" }}
            h={{ base: "auto", md: "100%" }}
            ml={{ base: "0", md: "40px" }}
            mt={{ base: "4", md: "0" }}
          >
            <Heading fontSize={{ base: "24px", md: "30px" }} fontWeight="500">
              Taavi Merisalu
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              mt={{ base: "10px", md: "15px" }}
            >
              Taavi graduated from the Institute of Sports Sciences and
              Physiotherapy of the University of Tartu. His specialty is
              heavyweights, folk sports and personal training. He has not
              stopped self-improvement - he is constantly replenishing himself
              with modern research in order to keep his methods as science-based
              as possible. In addition to training others, he also trains
              himself and is a very successful bodybuilder in Estonia. Several
              times he has achieved medal places in Estonian indoor competitions
              as well as in foreign competitions. Taavi's trainees hold more
              than 20 Estonian records in powerlifting. In addition to records,
              his students have brought 5 medals to Estonia from the European
              Championships.
            </Text>
            <Button
              color="#FFFFFF"
              bg="#2ecc71"
              fontSize={{ base: "18px", md: "20px" }}
              h="60px"
              w="220px"
              mt="18px"
              _hover={{
                background: "#276749",
                color: "#FFFFFF",
              }}
            >
              Choose this trainer
            </Button>
          </Box>
        </Flex>
        <Box w="100%" h="500px" mt="100px">
          <Heading textAlign="center" fontSize={{ base: "28px", md: "36px" }}>
            How does it work?
          </Heading>
          <Box w="100%" h="400px" mt="50px">
            <Heading fontSize={{ base: "40px", md: "60px" }} color="#CBD5E0">
              1{" "}
              <Heading
                as="span"
                fontSize={{ base: "16px", md: "18px" }}
                color="black"
                ml={{ base: "10px", md: "25px" }}
                fontWeight="400"
                verticalAlign="middle"
              >
                Sign up to GymWolf
              </Heading>
            </Heading>
            <Heading fontSize={{ base: "40px", md: "60px" }} color="#CBD5E0">
              2{" "}
              <Heading
                as="span"
                fontSize={{ base: "16px", md: "18px" }}
                color="black"
                ml={{ base: "10px", md: "25px" }}
                fontWeight="400"
                verticalAlign="middle"
              >
                Choose the personal trainer that fits you the best and make the
                purchase.
              </Heading>
            </Heading>
            <Heading fontSize={{ base: "40px", md: "60px" }} color="#CBD5E0">
              3{" "}
              <Heading
                as="span"
                fontSize={{ base: "16px", md: "18px" }}
                color="black"
                ml={{ base: "20px", md: "50px" }}
                fontWeight="400"
                noOfLines={2}
                verticalAlign="middle"
              >
                After the purchase your personal trainer will contact you
                through Gymwolf. Describe your goals and your trainer will then
                make you a customized workout plan.
              </Heading>
            </Heading>
            <Heading fontSize={{ base: "40px", md: "60px" }} color="#CBD5E0">
              4{" "}
              <Heading
                as="span"
                fontSize={{ base: "16px", md: "18px" }}
                color="black"
                ml={{ base: "20px", md: "50px" }}
                fontWeight="400"
                noOfLines={2}
                verticalAlign="middle"
              >
                Achieve your goals by following the workout plan and tracking
                workouts in Gymwolf. Personal trainer will keep an eye on your
                workouts, also giving feedback and motivation.
              </Heading>
            </Heading>
          </Box>
        </Box>
        <Heading textAlign="center" fontSize="36px" mt="100px" mb="40px">
          Pricing
        </Heading>
        <Box h="auto" w="100%" bg="#e6e7ea">
          <Container maxW="6xl" h="100%">
            <Heading
              textAlign="center"
              fontSize={{ base: "18px", md: "20px" }}
              fontWeight="400"
              pt={{ base: "20px", md: "60px" }}
            >
              Choose your trainer, complete the purchase and they will help you
              achieve your fitness goals!
            </Heading>
            <Flex
              mt={{ base: "20px", md: "30px" }}
              h="auto"
              justify="space-around"
              bg="#e6e7ea"
              pb={{ base: "30px", md: "50px" }}
              direction={{ base: "column", md: "row" }}
            >
              <Card boxShadow="lg" width={{ base: "100%", md: "31%" }}>
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
                    <Heading
                      fontSize="28px"
                      fontWeight="500"
                      textAlign="center"
                    >
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
              <Card boxShadow="lg" width={{ base: "100%", md: "31%" }}>
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
                    <Heading
                      fontSize="28px"
                      fontWeight="500"
                      textAlign="center"
                    >
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
              <Card boxShadow="lg" width={{ base: "100%", md: "31%" }}>
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
                    <Heading
                      fontSize="28px"
                      fontWeight="500"
                      textAlign="center"
                    >
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
        <Box w="100%" h="500px" textAlign="center">
          <Image
            src="https://gymwolf.com/img/trainer/become_trainer.svg"
            alt="trainerIcon"
            w="100px"
            h="100px"
            m="auto"
            mt="100px"
          />
          <Heading
            textAlign="center"
            fontSize="24px"
            fontWeight="500"
            mt="20px"
          >
            Become a personal trainer
          </Heading>
          <Heading
            textAlign="center"
            fontSize="21px"
            fontWeight="400"
            mt="18px"
          >
            If you are a qualified bodybuilding and fitness trainer, and want to
            join the Gymwolf team, let us know!
          </Heading>
          <Button
            mt="25px"
            variant="outline"
            border="1px solid black"
            h="60px"
            w="290px"
            fontSize="20px"
          >
            Become a personal trainer
          </Button>
        </Box>
      </Container>
      <SubFooter />
    </>
  );
}
