// src/components/layout/Sidebar.tsx

import { VStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const sections = [
  { id: "introduction", key: "introduction" },
  { id: "installation", key: "installation" },
  { id: "basic", key: "basic" },
];

export default function Sidebar() {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <VStack align="start" p={6}>
      {sections.map((item) => (
        <Text
          key={item.id}
          color="gray.400"
          cursor="pointer"
          _hover={{ color: "white" }}
          onClick={() => scrollTo(item.id)}
        >
          {t(item.key)}
        </Text>
      ))}
    </VStack>
  );
}
