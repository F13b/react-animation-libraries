import { Box, Heading, Text, Alert } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Introduction = () => {
  const { t } = useTranslation();

  return (
    <Box p={6}>
      <Heading mb={4}>{t("Introduction.title")}</Heading>

      <Text mb={4}>{t("Introduction.description")}</Text>
      <Alert.Root status="info" mb={4} borderRadius="md">
        <Alert.Indicator />
        <Alert.Title>{t("Introduction.alert")}</Alert.Title>
      </Alert.Root>

      <Text mb={4}>{t("Introduction.featuresTitle")}</Text>
      <ul style={{ paddingLeft: 20 }}>
        <li>{t("Introduction.feature1")}</li>
        <li>{t("Introduction.feature2")}</li>
        <li>{t("Introduction.feature3")}</li>
      </ul>
    </Box>
  );
};
