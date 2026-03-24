import { NavLink } from "react-router";
import { ColorModeButton } from "./ui/color-mode";

function Header() {
  return (
    <header>
      <p>Animations</p>
      <nav className="flex gap-2">
        <NavLink to="/gsap">GSAP</NavLink>
        <NavLink to="/framer-motion">Framer motion</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <ColorModeButton />
    </header>
  );
}

export default Header;
