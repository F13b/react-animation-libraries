// GSAP.tsx (обновлённый sidebar)

import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import Header from "../../components/layout/Header";
import {
  Container,
  Heading,
  Separator,
  Link as ChakraLink,
  VStack,
  Box,
} from "@chakra-ui/react";

function GSAP() {
  const [openDocs, setOpenDocs] = useState(true);
  const [openExamples, setOpenExamples] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/docs")) {
      setOpenDocs(true);
    }
    if (location.pathname.includes("/examples")) {
      setOpenExamples(true);
    }
  }, [location]);

  return (
    <>
      <Header />

      <main>
        <Container fluid>
          <Heading as="h1">Welcome to GSAP Animations!</Heading>

          <div className="flex">
            {/* SIDEBAR */}
            <aside className="w-1/3">
              <Heading as="h4" fontSize="1rem">
                Navigation
              </Heading>

              <VStack align="start">
                {/* ================= DOCS ================= */}
                <Box>
                  <ChakraLink
                    onClick={() => setOpenDocs((prev) => !prev)}
                    fontWeight="bold"
                  >
                    Docs
                  </ChakraLink>

                  {openDocs && (
                    <VStack align="start" pl={4} mt={2}>
                      <ChakraLink asChild>
                        <NavLink to="/gsap/docs/introduction">
                          Introduction
                        </NavLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NavLink to="/gsap/docs/installation">
                          Installation
                        </NavLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NavLink to="/gsap/docs/basic">Basic</NavLink>
                      </ChakraLink>
                    </VStack>
                  )}
                </Box>

                {/* ================= EXAMPLES ================= */}
                <Box>
                  <ChakraLink
                    onClick={() => setOpenExamples((prev) => !prev)}
                    fontWeight="bold"
                  >
                    Examples
                  </ChakraLink>

                  {openExamples && (
                    <VStack align="start" pl={4} mt={2}>
                      <ChakraLink asChild>
                        <NavLink to="/gsap/examples/scroll">
                          Scroll Animation
                        </NavLink>
                      </ChakraLink>
                    </VStack>
                  )}
                </Box>
              </VStack>
            </aside>

            <Separator />

            {/* CONTENT */}
            <Box flex="1" p={6}>
              <Outlet />
            </Box>
          </div>
        </Container>
      </main>
    </>
  );
}

export default GSAP;
