import {
  Container,
  Heading,
  Separator,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Header from "../components/layout/Header";
import { NavLink, Outlet } from "react-router";

function About() {
  return (
    <>
      <Header />
      <main>
        <Container fluid>
          <Heading as={"h1"}>Welcome to About Page!</Heading>
          <div className="flex">
            <aside className="w-1/3">
              <Heading as={"h4"} fontSize={"1rem"}>
                Navigation
              </Heading>
              <nav className="flex flex-col gap-2">
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/about/tween"}>Tween</NavLink>
                </ChakraLink>
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/about/docs"}>Docs</NavLink>
                </ChakraLink>
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/about/examples"}>Examples</NavLink>
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

export default About;
