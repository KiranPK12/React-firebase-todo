import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { AppProvider } from "./context";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
