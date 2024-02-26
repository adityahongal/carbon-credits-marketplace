import React, { useEffect }  from "react";
import { Box } from "@chakra-ui/react";
import { Flex, useColorModeValue, Image, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import logo from "../../Assets/logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { navitems } from "../../constants/navitems";
import { Stack, Text } from "@chakra-ui/react";


export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 6 }}
          px={{ base: 4, md: 16 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
            <Flex align={"center"}>
              <NavLink to={"/"}>
                <Image src={logo} />
              </NavLink>
            </Flex>
  
            <Flex display={{ base: "none", lg: "flex" }} ml={"16"}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Box display={{ base: "none", lg: "inline-flex" }}>
          <NavLink to={"/"}>
                  <Button
                    fontSize={"md"}
                    color={"white"}
                    bg={"button_gradient"}
                    px={8}
                    _hover={{
                      bg: "button_gradient_light",
                    }}
                    _active={{
                      bg: "button_gradient_light",
                    }}
                  >
                    Login
                  </Button>
                </NavLink>
          </Box>
        </Flex>
      </Box>
    );
  }

const DesktopNav = () => {
    const location = useLocation();
  
    return (
      <Stack direction={"row"} spacing={4}>
        {navitems.map(({ item = "", link = "" }) => (
          <Box key={item}>
            <NavLink to={`${location?.pathname === link ? "" : link}`}>
              <Text
                p={2}
                fontSize={"md"}
                fontWeight={400}
                color={location?.pathname === link ? "brand_pink.900" : "gray.800"}
                _hover={
                  location?.pathname !== link && {
                    textDecoration: "none",
                    color: "gray.600",
                  }
                }
              >
                {item}
              </Text>
            </NavLink>
          </Box>
        ))}
      </Stack>
    );
  };

  const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ lg: "none" }} spacing={0}>
            {navitems.map(({ item = "", link = "" }) => (
        <MobileNavItem key={item} onClick={""} item={item} link={link} />
      ))}
        <Box>
        <NavLink to={"/"}>
                <Button
                  fontSize={"md"}
                  color={"white"}
                  bg={"button_gradient"}
                  px={8}
                  _hover={{
                    bg: "button_gradient_light",
                  }}
                  _active={{
                    bg: "button_gradient_light",
                  }}
                >
                  Login
                </Button>
              </NavLink>  
        </Box>
        </Stack>
    );
  }

const MobileNavItem = ({ link, item, onClick }) => {
    const location = useLocation();
  
    return (
      <NavLink to={`${location?.pathname === link ? "" : link}`}>
        <Flex
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
          onClick={onClick}
        >
          <Text fontWeight={400} color={location?.pathname === link ? "brand_pink.900" : "gray.600"}>
            {item}
          </Text>
        </Flex>
      </NavLink>
    );
  };