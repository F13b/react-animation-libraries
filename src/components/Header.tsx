import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <p>Animations</p>
      <nav>
        <NavLink to="/gsap">GSAP</NavLink>
        <NavLink to="/framer-motion">Framer motion</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <button>Theme</button>
    </header>
  );
}

export default Header;
