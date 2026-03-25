import DocsLayout from "@/components/layout/DocsLayout";
import { Introduction } from "./sections/Introduction";
import { Installation } from "./sections/Installation";
import { Basic } from "./sections/Basic";

export default function Docs() {
  return (
    <DocsLayout>
      <Introduction />
      <Installation />
      <Basic />
    </DocsLayout>
  );
}
