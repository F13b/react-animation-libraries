import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    base: isProd ? "/react-animation-libraries/" : "/",
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      tsconfigPaths(),
      tailwindcss(),
    ],
  };
});
