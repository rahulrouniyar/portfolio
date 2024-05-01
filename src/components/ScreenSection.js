import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const ScreenSection = ({
  children,
  isDarkBackground,
  minHeight,
  ...boxProps
}) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight={minHeight} {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default ScreenSection;
