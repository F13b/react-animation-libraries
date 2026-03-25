import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DocsLayout({ children }: { children: any }) {
  return (
    <Flex h="100vh" bg="gray.900" color="white">
      {/* Sidebar */}
      <Box
        w="260px"
        borderRight="1px solid"
        borderColor="gray.800"
        position="sticky"
        top="0"
        h="100vh"
      >
        <Sidebar />
      </Box>

      {/* Main */}
      <Flex direction="column" flex="1">
        <Header />

        <Box p={10} maxW="900px" mx="auto" w="100%">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
