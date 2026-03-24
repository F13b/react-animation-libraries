import { createBrowserRouter } from "react-router";
import App from "../App";
import GSAP from "../pages/gsap/GSAP";
import FramerMotion from "../pages/FramerMotion";
import About from "../pages/About";
import Tween from "../pages/gsap/Tween";

const router = createBrowserRouter([
  {
    path: "/react-animation-libraries",
    Component: App,
  },
  {
    path: "/gsap",
    Component: GSAP,
    children: [
      {
        path: "tween",
        Component: Tween,
      },
    ],
  },
  {
    path: "/framer-motion",
    Component: FramerMotion,
  },
  {
    path: "/about",
    Component: About,
  },
]);

export default router;
