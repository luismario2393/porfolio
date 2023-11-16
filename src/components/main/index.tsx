import theme from "../../theme";
import { Container } from "../common";
import { Text, Header, TextTitle, ContainerText } from "./style";
import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation();

  return (
    <Header>
      <Container center>
        <Text>{t("main.title")}</Text>
        <TextTitle>{t("main.name")}</TextTitle>
        <TextTitle color={theme.colors.lightGray}>
          {t("main.profession")}
        </TextTitle>
        <ContainerText>
          <Text marginTop={20} color={theme.colors.lightGray}>
            {t("main.profile")}
          </Text>
        </ContainerText>
      </Container>
    </Header>
  );
};
