import { createBrowserRouter } from "react-router";
import App from "../App";
import GSAP from "../pages/gsap/GSAP";
import FramerMotion from "../pages/FramerMotion";
import About from "../pages/About";
import Tween from "../pages/gsap/Tween";
import { Introduction } from "@/pages/gsap/sections/Introduction";
import { Installation } from "@/pages/gsap/sections/Installation";
import { Basic } from "@/pages/gsap/sections/Basic";

const router = createBrowserRouter([
  {
    path: "/react-animation-libraries",
    Component: App,
  },
  {
    path: "gsap",
    Component: GSAP,
    children: [
      {
        path: "docs",
        children: [
          {
            index: true, // 👉 /gsap/docs
            Component: Introduction, // default
          },
          {
            path: "introduction",
            Component: Introduction,
          },
          {
            path: "installation",
            Component: Installation,
          },
          {
            path: "basic",
            Component: Basic,
          },
        ],
      },
      {
        path: "examples",
        children: [
          {
            index: true,
            Component: Basic,
          },
          {
            path: "scroll",
            Component: Basic,
          },
        ],
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
