import { NavLink } from "react-router";
import { ColorModeButton } from "./ui/color-mode";
import { Heading, Link as ChakraLink, Container } from "@chakra-ui/react";

function Header() {
  return (
    <header className="border-b-fuchsia-50 border-2">
      <Container
        display="flex"
        justifyContent={"space-between"}
        py={"8px"}
        fluid
      >
        <Heading fontSize={"1.5rem"}>React animation libraries</Heading>
        <nav className="flex gap-10">
          <ChakraLink asChild>
            <NavLink to="/gsap">GSAP</NavLink>
          </ChakraLink>
          <ChakraLink asChild>
            <NavLink to="/framer-motion">Framer motion</NavLink>
          </ChakraLink>
          <ChakraLink asChild>
            <NavLink to="/about">About</NavLink>
          </ChakraLink>
        </nav>
        <ColorModeButton />
      </Container>
    </header>
  );
}

export default Header;
