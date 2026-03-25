import {
  Box,
  Heading,
  Text,
  Alert,
  VStack,
  Separator,
  CodeBlock,
  IconButton,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const Basic = () => {
  const { t } = useTranslation();
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef1.current) {
      gsap.to(boxRef1.current, { x: 100, duration: 1 });
    }
    if (boxRef2.current) {
      gsap.from(boxRef2.current, { opacity: 0, duration: 15 });
    }
    if (boxRef3.current) {
      const tl = gsap.timeline({ repeat: 1, yoyo: true });
      tl.to(boxRef3.current, { x: 100, duration: 1 }).to(boxRef3.current, {
        y: 100,
        duration: 1,
      });
    }
  }, []);

  return (
    <Box p={6}>
      <Heading mb={4}>{t("Basic.title")}</Heading>

      <Alert.Root borderRadius="md" status="info" mb={4}>
        <Alert.Indicator />
        <Alert.Title>{t("Basic.alert")}</Alert.Title>
      </Alert.Root>

      <VStack gap={6} align="stretch">
        {/* gsap.to */}
        <Box>
          <Heading size="md" mb={2}>
            {t("Basic.toMethod")}
          </Heading>
          <Text mb={2}>{t("Basic.toDescription")}</Text>
          <CodeBlock.Root
            language="tsx"
            code={`gsap.to(element, { x: 100, duration: 1 });`}
            mb={4}
          >
            <CodeBlock.Header>
              <CodeBlock.Title>gsap.to Example</CodeBlock.Title>
              <CodeBlock.CopyTrigger asChild>
                <IconButton variant="ghost" size="2xs">
                  <CodeBlock.CopyIndicator />
                </IconButton>
              </CodeBlock.CopyTrigger>
            </CodeBlock.Header>
            <CodeBlock.Content>
              <CodeBlock.Code>
                <CodeBlock.CodeText />
              </CodeBlock.Code>
            </CodeBlock.Content>
          </CodeBlock.Root>
          <Box ref={boxRef1} w={20} h={20} bg="teal.400" mb={2} />
        </Box>

        <Separator />

        {/* gsap.from */}
        <Box>
          <Heading size="md" mb={2}>
            {t("Basic.fromMethod")}
          </Heading>
          <Text mb={2}>{t("Basic.fromDescription")}</Text>
          <CodeBlock.Root
            language="tsx"
            code={`gsap.from(element, { opacity: 0, duration: 5 });`}
            mb={4}
          >
            <CodeBlock.Header>
              <CodeBlock.Title>gsap.from Example</CodeBlock.Title>
              <CodeBlock.CopyTrigger asChild>
                <IconButton variant="ghost" size="2xs">
                  <CodeBlock.CopyIndicator />
                </IconButton>
              </CodeBlock.CopyTrigger>
            </CodeBlock.Header>
            <CodeBlock.Content>
              <CodeBlock.Code>
                <CodeBlock.CodeText />
              </CodeBlock.Code>
            </CodeBlock.Content>
          </CodeBlock.Root>
          <Box ref={boxRef2} w={20} h={20} bg="orange.400" mb={2} />
        </Box>

        <Separator />

        {/* gsap.timeline */}
        <Box>
          <Heading size="md" mb={2}>
            {t("Basic.timeline")}
          </Heading>
          <Text mb={2}>{t("Basic.timelineDescription")}</Text>
          <CodeBlock.Root
            language="tsx"
            code={`const tl = gsap.timeline({ repeat: 1, yoyo: true });
tl.to(element, { x: 100, duration: 1 })
  .to(element, { y: 100, duration: 1 });`}
            mb={4}
          >
            <CodeBlock.Header>
              <CodeBlock.Title>Timeline Example</CodeBlock.Title>
              <CodeBlock.CopyTrigger asChild>
                <IconButton variant="ghost" size="2xs">
                  <CodeBlock.CopyIndicator />
                </IconButton>
              </CodeBlock.CopyTrigger>
            </CodeBlock.Header>
            <CodeBlock.Content>
              <CodeBlock.Code>
                <CodeBlock.CodeText />
              </CodeBlock.Code>
            </CodeBlock.Content>
          </CodeBlock.Root>
          <Box ref={boxRef3} w={20} h={20} bg="purple.400" mb={2} />
        </Box>
      </VStack>
    </Box>
  );
};
