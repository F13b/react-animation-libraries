import {
  Box,
  Heading,
  Text,
  Alert,
  CodeBlock,
  IconButton,
  Float,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Installation = () => {
  const { t } = useTranslation();

  return (
    <Box p={6}>
      <Heading mb={4}>{t("Installation.title")}</Heading>

      <Text mb={4}>{t("Installation.description")}</Text>

      <Heading size="md" mb={2}>
        {t("Installation.npmTitle")}
      </Heading>
      <Box mb={4} position="relative">
        <CodeBlock.Root language="bash" code={`npm install gsap`} mb={4}>
          <CodeBlock.Content>
            <Float placement="middle-end" offset="5" zIndex="1">
              <CodeBlock.CopyTrigger asChild>
                <IconButton variant="ghost" size="sm">
                  <CodeBlock.CopyIndicator />
                </IconButton>
              </CodeBlock.CopyTrigger>
            </Float>
            <CodeBlock.Code>
              <CodeBlock.CodeText />
            </CodeBlock.Code>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </Box>

      <Heading size="md" mb={2}>
        {t("Installation.cdnTitle")}
      </Heading>
      <Box mb={4} position="relative">
        <CodeBlock.Root
          language="javascript"
          code={`<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>;`}
          mb={4}
        >
          <CodeBlock.Content>
            <Float placement="middle-end" offset="5" zIndex="1">
              <CodeBlock.CopyTrigger asChild>
                <IconButton variant="ghost" size="sm">
                  <CodeBlock.CopyIndicator />
                </IconButton>
              </CodeBlock.CopyTrigger>
            </Float>
            <CodeBlock.Code>
              <CodeBlock.CodeText />
            </CodeBlock.Code>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </Box>

      <Alert.Root status="info" mb={4} borderRadius="md">
        <Alert.Indicator />
        <Alert.Title>{t("Installation.alert")}</Alert.Title>
      </Alert.Root>
    </Box>
  );
};
