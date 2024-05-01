import React from "react";
import {
  Image,
  HStack,
  Heading,
  VStack,
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import ScreenSection from "./ScreenSection";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/card";

const EducationSection = () => (
  <ScreenSection backgroundColor="#fff" minHeight="50vh" p={8}>
    <Heading as="h1" id="education-section">
      Education
    </Heading>
    <VStack align="stretch" spacing={4}>
      <SimpleGrid columns={2} spacing={4}>
        <Card bg="grey" borderRadius="10px" p={8}>
          <CardHeader bg="black" color="white" p={2}>
            <Heading size="md">
              Bachelor in Electronics, Communication and Information Engineering
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Pulchowk Campus, Institute of Engineering, Tribhuvan University
            </Text>
            <Text> Lalitpur, Nepal</Text>
            <Text>2018-2023</Text>
          </CardBody>
        </Card>
        <Card bg="grey" borderRadius="10px" p={8}>
          <CardHeader bg="black" color="white" p={2}>
            <Heading size="md">Higher Secondary Education in Science</Heading>
          </CardHeader>
          <CardBody>
            <Text>Pinnacle Academy</Text>
            <Text> Lalitpur, Nepal</Text>
            <Text>2016-2018</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </VStack>

    {/* <VStack>
      <VStack>
        <Heading>
          Bachelor in Electronics, Communication and Information Engineering
        </Heading>
      </VStack>
      <VStack>
        <Heading>+2 in Science</Heading>
      </VStack>
    </VStack> */}

    {/* <VStack p={3}>
      <VStack p={1}>
        <Heading as="h2">
          Bachelor in Electronics, Communication and Information Engineering
        </Heading>
        <Text>Pulchowk Campus</Text>
        <Text>75.49 %</Text>
      </VStack>
      <VStack p={1}>
        <Heading as="h2">+2 in Science</Heading>
        <Text>Pinnacle Academy</Text>
        <Text>3.52 cgpa</Text>
      </VStack>
    </VStack> */}
  </ScreenSection>
);

export default EducationSection;
