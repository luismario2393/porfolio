import styled from "styled-components";

interface Props {
  center?: boolean;
}

export interface TextProps {
  fontSize?: string;
  color?: string;
  weight?: number;
  marginTop?: number;
  widthMobile?: number;
}

export const Container = styled.div<Props>`
  margin: 0 auto;
  width: 90%;
  transition: all 0.3s ease-in-out;
  height: 80vh;

  ${({ center }) =>
    center &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
  
  `}

  @media (min-width: 768px) {
    width: 70%;
    transition: all 0.3s ease-in-out;
  }
`;
export const Guion = styled.div<Props>`
  color: ${({ theme }) => theme.colors.blue};
`;

export const TitleSection = styled.h2`
  display: flex;
  gap: 10px;
`;

export const ContainerText = styled.div<TextProps>`
  width: 100%;

  @media (min-width: 768px) {
    width: ${({ widthMobile }) => (widthMobile ? `${widthMobile}%` : "60%")};
  }
`;

export const Text = styled.p<TextProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`};
  color: ${({ theme, color }) => (color ? color : theme.colors.blue)};
`;
