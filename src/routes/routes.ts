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
      {
        path: "docs",
        Component: Tween,
      },
      {
        path: "examples",
        Component: Tween,
      },
    ],
  },
  {
    path: "/framer-motion",
    Component: FramerMotion,
    children: [
      {
        path: "tween",
        Component: Tween,
      },
      {
        path: "docs",
        Component: Tween,
      },
      {
        path: "examples",
        Component: Tween,
      },
    ],
  },
  {
    path: "/about",
    Component: About,
    children: [
      {
        path: "tween",
        Component: Tween,
      },
      {
        path: "docs",
        Component: Tween,
      },
      {
        path: "examples",
        Component: Tween,
      },
    ],
  },
]);

export default router;
