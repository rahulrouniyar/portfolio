import React from "react";
import { Image, HStack, Heading, VStack, Box } from "@chakra-ui/react";
import ScreenSection from "./ScreenSection";

const skills = [
  {
    title: "Django",
    getImageSrc: () => require("../images/django.png"),
  },
  {
    title: "Django RestFramework",
    getImageSrc: () => require("../images/drf.png"),
  },
  {
    title: "SQL",
    getImageSrc: () => require("../images/postgresql.png"),
  },
  {
    title: "HTML",
    getImageSrc: () => require("../images/html.png"),
  },
  {
    title: "CSS",
    getImageSrc: () => require("../images/css.png"),
  },
  // {
  //   title: "Javascript",
  //   getImageSrc: () => require("../images/"),
  // },
];
const SkillsSection = () => (
  <ScreenSection backgroundColor="#fff" minHeight="50vh" p={8}>
    <Heading as="h1" id="skills-section">
      Skills
    </Heading>

    <HStack p={5} spacing={12}>
      {skills.map((skill) => (
        <Image src={skill.getImageSrc()} width="200px" height="200px" />
      ))}
    </HStack>
  </ScreenSection>
);

export default SkillsSection;
