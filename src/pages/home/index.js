import { lazy, Suspense, useEffect, useState } from "react";
import { Box, Button, Center, Spinner } from "@chakra-ui/react";
import {FiSunrise} from "react-icons/fi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TrendingAlbums from "./trending/trendingAlbums";
import TrendingSongs from "./trending/trendingSongs";
const [DashboardLayout] = [
  lazy(() => import("../../components/layout/dashboardLayout")),
];

const HomePage = () => {
  const [mode, setMode] = useState("light");
  const storedMode = localStorage.getItem("mode");
  if (storedMode == null) {
    localStorage.setItem("mode", "light");
  }
  useEffect(() => {
    setMode(storedMode);
  }, [storedMode]);

  const handleClick = () => {
    if (storedMode == "light" || storedMode === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("Light");
    }
  };
  return (
    <Suspense
     
      fallback={
        <Center h="100vh" w="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="#0000005e"
            color="rgba(0, 0, 0, 0.616)"
            size="xl"
          />
        </Center>
      }
    >
      <DashboardLayout>
      <Button
          onClick={handleClick}
          height="40px"
          px="20px"
          borderRadius="lg"
          position="absolute"
          top="20px"
          right="50px"
          bg={localStorage.getItem('mode')}
          border="none"
          color="#fff"
        >
          <FiSunrise color={localStorage.getItem('mode') === 'dark' ? '#fff': '#000'} size={30} />
        </Button>
        <Tabs background={localStorage.getItem('mode') === 'dark' ? 'rgba(0,0,0,0.9)': '#fff'} color={localStorage.getItem('mode') === 'dark' ? '#fff': '#000'}>
          <TabList borderBottom="none" mt="50px" gap="40px">
            <Tab _selected={{ color: "blue.500", fontWeight: "bolder" }}>
              Trending Albums
            </Tab>
            <Tab _selected={{ color: "blue.500", fontWeight: "bolder" }}>
              Trending Songs
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TrendingAlbums />
            </TabPanel>
            <TabPanel>
              <TrendingSongs />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DashboardLayout>
    </Suspense>
  );
};

export default HomePage;
