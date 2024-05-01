import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ScreenSection from "./ScreenSection";
import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

const greeting = "Hello, I am Rahul!";
const bio1 = "A backend developer";
const bio2 = "specialised in Django";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
// const LandingSection = () => (
//   <FullScreenSection
//     justifyContent="center"
//     alignItems="center"
//     backgroundColor="#fff"
//   >
//     <VStack m={8}>
//       <Avatar
//         size="2xl"
//         src="https://avatars.githubusercontent.com/u/70808666?s=400&u=1049e3e50382ac2cf77d354827f77f5af86ca61e&v=4"
//       />
//       <Heading as="h4" size="sm">
//         {greeting}
//       </Heading>
//     </VStack>
//     <VStack>
//       <Heading as="h1">{bio1}</Heading>
//       <Heading as="h1">{bio2}</Heading>
//     </VStack>
//   </FullScreenSection>
// );

const LandingSection = () => (
  <ScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#fff"
    minHeight="100vh"
  >
    <VStack m={8}>
      <Avatar
        size="2xl"
        src="https://avatars.githubusercontent.com/u/70808666?s=400&u=1049e3e50382ac2cf77d354827f77f5af86ca61e&v=4"
      />
      <Heading as="h4" size="sm">
        {greeting}
      </Heading>
    </VStack>
    <VStack>
      <Heading as="h1">{bio1}</Heading>
      <Heading as="h1">{bio2}</Heading>
    </VStack>
  </ScreenSection>
);

export default LandingSection;
