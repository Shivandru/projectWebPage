import React from "react";
import {
  Container,
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import shoeWatchLogo from "../assets/assets (1)/asset 11.png";
import pic1 from "../assets/assets (1)/asset 12.jpeg";
import pic2 from "../assets/assets (1)/asset 15.jpeg";
import graphLogo from "../assets/assets (1)/asset 18.png";
import pic3 from "../assets/assets (1)/asset 19.jpeg";
import pic4 from "../assets/assets (1)/asset 20.jpeg";
import pic5 from "../assets/assets (1)/asset 21.jpeg";
import dumbleLogo from "../assets/assets (1)/asset 22.png";
import pic6 from "../assets/assets (1)/asset 23.jpeg";
import pic7 from "../assets/assets (1)/asset 24.jpeg";
import calendarLogo from "../assets/assets (1)/asset 25.png";
import pic8 from "../assets/assets (1)/asset 15.jpeg";
import pic9 from "../assets/assets (1)/asset 12.jpeg";
import personalTrainerLogo from "../assets/assets (1)/asset 13.png";
import mobileLogo from "../assets/assets (1)/asset 14.png";
import googleLogo from "../assets/asset 0.png";
import appleLogo from "../assets/asset 1.png";
export default function FeaturesPage() {
  return (
    <Container maxW="6xl" border="1px solid white" h="auto">
      <Box h="80px" w="100%" borderBottom="1px solid #E2E8F0">
        <Heading mt="100px" fontSize="36px" fontWeight="400">
          Take a tour
        </Heading>
      </Box>
      <Flex
        position="relative"
        h={{ base: "auto", md: "400px" }}
        w="100%"
        borderBottom="1px solid #A0AEC0"
        mt={{ base: "20px", md: "30px" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Image
          src={shoeWatchLogo}
          alt="shoeWatch"
          w={{ base: "200px", md: "300px" }}
          h={{ base: "200px", md: "300px" }}
          mb={{ base: "15px", md: "0" }}
        />
        <Box>
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            mt={{ base: "20px", md: "27px" }}
            ml={{ base: "0", md: "30px" }}
          >
            Track Your Gym and Cardio Workouts
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight="600"
            ml={{ base: "0", md: "30px" }}
            mt={{ base: "10px", md: "12px" }}
          >
            Gymwolf is a workout tracking tool that helps you track your gym and
            cardio workouts.
            <Text as="span" fontWeight="400">
              For gym workouts just add your exercises and sets. For cardio
              workouts enter the activity, duration and distance. It's really
              easy. You can also track your bodyweight and add notes on both gym
              and cardio workouts.
            </Text>
          </Text>
        </Box>
        <Image
          src={pic1}
          alt="pic1"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position={{ base: "relative", md: "absolute" }}
          right={{ base: "auto", md: "130px" }}
          bottom={{ base: "auto", md: "40px" }}
        />
        <Image
          src={pic2}
          alt="pic2"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position={{ base: "relative", md: "absolute" }}
          right={{ base: "-15%", md: "0" }}
          bottom={{ base: "55px", md: "40px" }}
        />
      </Flex>
      <Flex
        position="relative"
        w="100%"
        h={{ base: "auto", md: "380px" }}
        borderBottom="1px solid #A0AEC0"
        mt={{ base: "10px", md: "20px" }}
        direction={{ base: "column-reverse", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Box>
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            mt={{ base: "10px", md: "27px" }}
            ml={{ base: "0", md: "30px" }}
          >
            See your progress
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            ml={{ base: "0", md: "30px" }}
            mt={{ base: "5px", md: "12px" }}
            mb={{ base: "70px" }}
          >
            Gymwolf provides different graphs that help you track your progress.
            There are graphs for gym workouts, cardio workouts and bodyweight.
            The graphs are highly customizable: you can select the date range,
            exercise and group the results by month, week or single workout.
          </Text>
        </Box>
        <Image
          src={graphLogo}
          alt="graphLogo"
          h={{ base: "200px", md: "300px" }}
          w={{ base: "200px", md: "300px" }}
          mt={{ base: "0", md: "-20px" }}
          mb={{ base: "10px", md: "0" }}
        />
        <Image
          src={pic3}
          alt="pic3"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position={{ base: "absolute", md: "absolute" }}
          left={{ base: "0", md: "0" }}
          bottom={{ base: "0px", md: "40px" }}
        />
        <Image
          src={pic4}
          alt="pic4"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position="absolute"
          left={{ base: "90px", md: "130px" }}
          bottom={{ base: "0px", md: "40px" }}
        />
        <Image
          src={pic5}
          alt="pic5"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position="absolute"
          left={{ base: "170px", md: "260px" }}
          bottom={{ base: "0px", md: "40px" }}
        />
      </Flex>
      <Flex
        position="relative"
        h={{ base: "auto", md: "400px" }}
        w="100%"
        borderBottom="1px solid #A0AEC0"
        mt={{ base: "0px", md: "30px" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Image
          src={dumbleLogo}
          alt="shoeWatch"
          w={{ base: "200px", md: "300px" }}
          h={{ base: "200px", md: "300px" }}
          mb={{ base: "0px", md: "0" }}
        />
        <Box>
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            mt={{ base: "0px", md: "27px" }}
            ml={{ base: "0", md: "30px" }}
          >
            Database with 300+ exercises
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            ml={{ base: "0", md: "30px" }}
            mt={{ base: "5px", md: "12px" }}
            mb={{ base: "70px" }}
          >
            Gymwolf has a database with over 300 exercises. The exercises come
            with detailed descriptions, tips and step-by-step images. If you
            don't find a exercise from our database, then you can also add your
            own exercises.
          </Text>
        </Box>
        <Button
          position={{ base: "absolute", md: "absolute" }}
          bottom={{ base: "40px", md: "150px" }}
          left={{ base: "0px", md: "320px" }}
          variant="outline"
          fontWeight="300"
          mt={{ base: "15px", md: "0" }}
          _hover={{
            background: "#A0AEC0",
            color: "black",
          }}
        >
          Check out our exercise list
        </Button>
        <Image
          src={pic6}
          alt="pic6"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position={{ base: "relative", md: "absolute" }}
          right={{ base: "auto", md: "130px" }}
          bottom={{ base: "0px", md: "40px" }}
        />
        <Image
          src={pic7}
          alt="pic7"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position={{ base: "relative", md: "absolute" }}
          right={{ base: "-100px", md: "0" }}
          bottom={{ base: "55px", md: "40px" }}
        />
      </Flex>
      <Flex
        position="relative"
        w="100%"
        h={{ base: "auto", md: "380px" }}
        borderBottom="1px solid #A0AEC0"
        mt={{ base: "10px", md: "20px" }}
        direction={{ base: "column-reverse", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Box>
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            mt={{ base: "10px", md: "27px" }}
            ml={{ base: "0", md: "30px" }}
          >
            Create Workout Plans
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            ml={{ base: "0", md: "30px" }}
            mt={{ base: "5px", md: "12px" }}
            mb={{ base: "100px" }}
          >
            With Gymwolf you can create your own workout plans. You can also
            browse workout plans created by other users and add them to your
            plans with just one click. Workout plans make adding your workout
            data even easier: add a new workout and select your workout plan,
            the workout data will be filled in automatically.
          </Text>
        </Box>
        <Image
          src={calendarLogo}
          alt="graphLogo"
          h={{ base: "150px", md: "300px" }}
          w={{ base: "150px", md: "300px" }}
          mt={{ base: "0", md: "-20px" }}
          mb={{ base: "10px", md: "0" }}
        />
        <Image
          src={pic8}
          alt="pic8"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position={{ base: "absolute", md: "absolute" }}
          left={{ base: "0", md: "0" }}
          bottom={{ base: "20px", md: "40px" }}
        />
        <Image
          src={pic9}
          alt="pic9"
          w={{ base: "70px", md: "110px" }}
          h={{ base: "55px", md: "85px" }}
          position="absolute"
          left={{ base: "90px", md: "130px" }}
          bottom={{ base: "20px", md: "40px" }}
        />
      </Flex>
      <Flex
        position="relative"
        h={{ base: "auto", md: "400px" }}
        w="100%"
        borderBottom="1px solid #A0AEC0"
        mt={{ base: "20px", md: "30px" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Image
          src={personalTrainerLogo}
          alt="shoeWatch"
          w={{ base: "200px", md: "300px" }}
          h={{ base: "200px", md: "300px" }}
          mb={{ base: "10px", md: "0" }}
        />
        <Box>
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            mt={{ base: "10px", md: "27px" }}
            ml={{ base: "0", md: "30px" }}
          >
            Online personal trainer
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            ml={{ base: "0", md: "30px" }}
            mt={{ base: "5px", md: "12px" }}
            mb={{ base: "100px" }}
          >
            Gymwolf has certified personal trainers that provide you with
            customised workout plans depending on your goals. Our trainers track
            your progress, coach and motivate you daily through our web and
            smartphone app.
          </Text>
        </Box>
        <Button
          position="absolute"
          bottom={{ base: "20px", md: "150px" }}
          left={{ base: "20px", md: "320px" }}
          variant="outline"
          fontWeight="300"
          _hover={{
            background: "#A0AEC0",
            color: "black",
          }}
          mt={{ base: "15px", md: "0" }}
        >
          Learn more
        </Button>
      </Flex>
      <Flex
        position="relative"
        w="100%"
        h={{ base: "auto", md: "380px" }}
        borderBottom="1px solid #A0AEC0"
        mt={{ base: "10px", md: "20px" }}
        direction={{ base: "column-reverse", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Box>
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            mt={{ base: "10px", md: "27px" }}
            ml={{ base: "0", md: "30px" }}
          >
            Discover Our Mobile Apps
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            ml={{ base: "0", md: "30px" }}
            mt={{ base: "5px", md: "12px" }}
          >
            Our mobile apps save all the workout data online at Gymwolf.com, so
            you don't have to worry about syncing or backing up your data.
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            ml={{ base: "0", md: "30px" }}
            mt={{ base: "5px", md: "12px" }}
            mb={{ base: "150px" }}
          >
            Check out our mobile apps:
          </Text>
        </Box>
        <Image
          src={mobileLogo}
          alt="graphLogo"
          h="300px"
          w="300px"
          mt="-20px"
        />
        <Image
          src={googleLogo}
          alt="pic8"
          w="134px"
          h="40px"
          position="absolute"
          left="10"
          bottom="100px"
        />
        <Image
          src={appleLogo}
          alt="pic9"
          w="134px"
          h="40px"
          position="absolute"
          left="10"
          bottom="40px"
        />
      </Flex>
      <Text textAlign="center" mt="50px" fontSize="21px" fontWeight="600">
        Gymwolf is the best tool to track your workouts online.
      </Text>
      <Box textAlign="center" mb="50px">
        <Button
          mt="30px"
          bg="#428bca"
          color="#FFFFFF"
          w="200px"
          h="50px"
          _hover={{
            background: "#2C5282",
            color: "#FFFFFF",
          }}
        >
          Start using Gymwolf
        </Button>
      </Box>
    </Container>
  );
}
