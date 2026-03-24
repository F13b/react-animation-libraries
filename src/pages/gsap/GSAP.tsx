import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  Heading,
  Separator,
  Link as ChakraLink,
} from "@chakra-ui/react";

function GSAP() {
  return (
    <>
      <Header />
      <main>
        <Container fluid>
          <Heading as={"h1"}>Welcome to GSAP Animations!</Heading>
          <div className="flex">
            <aside className="w-1/3">
              <Heading as={"h4"} fontSize={"1rem"}>
                Navigation
              </Heading>
              <nav className="flex flex-col gap-2">
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/gsap/tween"}>Tween</NavLink>
                </ChakraLink>
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/gsap/docs"}>Docs</NavLink>
                </ChakraLink>
                <ChakraLink asChild fontSize={"1rem"}>
                  <NavLink to={"/gsap/examples"}>Examples</NavLink>
                </ChakraLink>
              </nav>
            </aside>
            <Separator />
            <Outlet />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default GSAP;
