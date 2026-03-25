import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes/routes.ts";
import { Provider } from "./components/ui/provider.tsx";
import "./i18n";
import { CodeBlock, createShikiAdapter } from "@chakra-ui/react";

const shikiAdapter = createShikiAdapter({
  theme: "github-dark",
  load: async () => {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["tsx", "javascript", "json", "bash"],
      themes: ["github-dark", "github-light"],
    });
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <CodeBlock.AdapterProvider value={shikiAdapter}>
        <RouterProvider router={router} />
      </CodeBlock.AdapterProvider>
    </Provider>
  </StrictMode>,
);
