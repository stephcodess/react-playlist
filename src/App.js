import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./utils/routes/router";
import theme from "./utils/theme/index";

function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
