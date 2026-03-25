import {
  Container,
  Heading,
  Separator,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Header from "../components/layout/Header";
import { NavLink, Outlet } from "react-router";

function FramerMotion() {
  return (
    <>
      <Header />
      <main>
        <Container fluid>
          <Heading as={"h1"}>Welcome to Framer Motion Animations!</Heading>
          <div className="flex">
            <aside className="w-1/3">
              <Heading as={"h4"} fontSize={"1rem"}>
                Navigation
              </Heading>
              <nav className="flex flex-col gap-2">
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/framer-motion/tween"}>Tween</NavLink>
                </ChakraLink>
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/framer-motion/docs"}>Docs</NavLink>
                </ChakraLink>
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/framer-motion/examples"}>Examples</NavLink>
                </ChakraLink>
              </nav>
            </aside>
            <Separator />
            <Outlet />
          </div>
        </Container>
      </main>
    </>
  );
}

export default FramerMotion;
