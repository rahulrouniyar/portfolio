import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: rouniyar.rahul27@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/rahulrouniyar",
  },
  {
    icon: faLinkedin,
    url: "www.linkedin.com/in/rahulrouniyar",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((s) => {
                return (
                  <a key={s.icon} href={s.url} target="_blank">
                    <FontAwesomeIcon icon={s.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={() => handleClick("skills")} href="/#skills">
                Skills
              </a>
              <a onClick={() => handleClick("education")} href="/#eduction">
                Education
              </a>
              <a onClick={() => handleClick("projects")} href="/#projects">
                Projects
              </a>
              <a
                onClick={() => handleClick("certificates")}
                href="/#certificates"
              >
                Certificates
              </a>
              <a onClick={() => handleClick("contactme")} href="/#contact-me">
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
      <Alert status="warning">
        <AlertIcon />
        <AlertDescription>
          This website is under development. This is not the final one.
        </AlertDescription>
      </Alert>
    </Box>
  );
};
export default Header;
