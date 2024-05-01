import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack align="stretch" bg="white" color="black" borderRadius="10px">
      <Image src={imageSrc} height="300px" />
      <Heading p={3} as="h2">
        {title}
      </Heading>
      <Text p={3}>{description}</Text>

      <HStack p={3}>
        <a key={faGithub} href={url} target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        {/* <Text as="b">See more</Text>
        <FontAwesomeIcon p={2} icon={faArrowRight} size="1x" /> */}
      </HStack>
    </VStack>
  );
};

export default Card;
