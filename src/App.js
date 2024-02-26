import React from "react";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
