import { Container, Guion, TitleSection, ContainerText, Text } from "../common";
import { Ul, StyledPic, ContainerAbout } from "./style";
import fotoLA from "../../assets/foto-la.jpeg";
import theme from "../../theme";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <Container id="about">
      <TitleSection>
        <Guion>-</Guion>
        {t("about")}
      </TitleSection>
      <ContainerAbout>
        <ContainerText widthMobile={100}>
          <Text marginTop={20} color={theme.colors.lightGray}>
            {t("about_section.paragraph_1")}
          </Text>
          <Text marginTop={20} color={theme.colors.lightGray}>
            {t("about_section.paragraph_2")}
          </Text>
          <Text marginTop={20} color={theme.colors.lightGray}>
            {t("about_section.paragraph_3")}
          </Text>{" "}
          <Ul>
            <li>{t("about_section.skills.javaScript")}</li>
            <li>{t("about_section.skills.typeScript")}</li>
            <li>{t("about_section.skills.react")}</li>
            <li>{t("about_section.skills.redux")}</li>
            <li>{t("about_section.skills.node")}</li>
            <li>{t("about_section.skills.flutter")}</li>
          </Ul>
        </ContainerText>
        <StyledPic>
          <div className="wrapper">
            <img className="img" src={fotoLA} alt="foto luis" />
          </div>
        </StyledPic>
      </ContainerAbout>
    </Container>
  );
};
