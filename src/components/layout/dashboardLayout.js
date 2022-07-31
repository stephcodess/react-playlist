import {
  Box,
  Center,
  Spinner,
  VStack,
  Image,
  Avatar,
  Link,
} from "@chakra-ui/react";
import {FiHeart, FiBarChart, FiMusic, FiHome} from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { RoutePaths } from "../../utils/routes/routePaths";

const DashboardLayout = ({ children }) => {
  const iconColor = localStorage.getItem('mode') === 'dark' ? '#fff' : '#000';
  const router = useLocation();
  const defaultRoutes = [
    {
      label: "dashboard",
      image: <FiHome color={iconColor} />,
      route: RoutePaths.BASE_URL,
      sub_route_1: RoutePaths.BASE_URL,
      sub_route_2: RoutePaths.BASE_URL,
    },
    {
      label: "likes",
      image: <FiMusic  color={iconColor} />,
      route: RoutePaths.BASE_URL+'/?q=likes',
    },
    {
      label: "bell",
      image: <FiBarChart color={iconColor} />,
      route: "/notifications",
    },
    {
      label: "user",
      image: <FiHeart color={iconColor} />,
      route: RoutePaths.BASE_URL,
    },
  ];

  return (
    <Box
      backgroundColor={localStorage.getItem('mode') === 'dark' ? 'rgba(0,0,0,0.9)': '#fff'}
      display={{ lg: "grid" }}
      gridTemplateColumns={{ lg: "0.9fr 4fr" }}
      minH="100vh"
      maxW={"min(100%,1920px)"}
      mx="auto"
    >
      <Box
        as="aside"
        pt="3rem"
        display={{ base: "none", lg: "block" }}
        borderRight={{ base: "none", lg: "1px solid #d4d3d2" }}
        maxH="100vh"
        overflowY="scroll"
        className="no-scrollbar"
        pb="70px"
      >
        <Box pr="10px">
          <VStack alignItems="end">
            <VStack alignItems="center" gap="3rem">
              <VStack alignItems="end">
                <Image
                  mb="2rem"
                  src="/images/svg/logo_2.svg"
                  height="55px"
                  alt="logo"
                />

                <Box>
                  <Avatar
                    src="/images/svg/logo_2.svg"
                    name={"Sunday Imohowo"}
                    size="lg"
                  />
                </Box>
              </VStack>

              <VStack gap="1.2rem">
                {defaultRoutes.map(
                  ({ route, image, label, sub_route_1, sub_route_2 }) => {
                    const isActive =
                      router.pathname.includes(route) ||
                      //@ts-ignore
                      router.pathname.includes(sub_route_1) ||
                      //@ts-ignore
                      router.pathname.includes(sub_route_2);

                    return (
                      <Link
                        key={label}
                        bg={isActive ? "#E9A3BB90" : ""}
                        _hover={{ bg: "#E9A3BB90" }}
                        p="9px"
                        borderRadius="lg"
                        href={route}
                        _focus={{ outline: "none" }}
                      >
                        {image}
                      </Link>
                    );
                  }
                )}
              </VStack>

              <VStack gap="1rem">
                <Link
                  _hover={{ bg: "#E9A3BB90" }}
                  bg={router.pathname === RoutePaths.FAQ ? "#E9A3BB90" : ""}
                  p="9px"
                  borderRadius="lg"
                  href={RoutePaths.FAQ}
                  _focus={{ outline: "none" }}
                >
                  <FiBarChart color={iconColor}/>
                </Link>

              </VStack>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <Box
        as="section"
        backgroundColor={localStorage.getItem('mode') === 'dark' ? 'rgba(0,0,0,0.9)': '#fff'}
        maxH="100vh"
        overflowY="scroll"
        className="no-scrollbar"
      >
        {children}
        {!children && (
          <Center w="100%" h="100%">
            <Spinner
              data-testid="chakra-spinner"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="brand.400"
              size="xl"
            />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
