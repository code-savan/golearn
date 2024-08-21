import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const metadata = {
  title: "Go Learn",
  description: "Next Generation Online Schooling System",
};

const RootLayout = ({ children }) => {
  return (
    <main>
       <ChakraProvider>{children}</ChakraProvider>
    </main>
  );
};

export default RootLayout;
