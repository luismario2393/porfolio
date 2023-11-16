import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  color?: string;
  weight?: number;
  marginTop?: number;
}

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Text = styled.p<TextProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`};
  color: ${({ theme, color }) => (color ? color : theme.colors.blue)};
`;
export const TextTitle = styled.p<TextProps>`
  margin: 0;
  color: ${({ theme, color }) => (color ? color : theme.colors.black)};
  font-size: ${({ theme }) => theme.font.fzBigHeading};
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.fzHeadingMax};
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.font.fzHeading};
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.font.fzXxl};
    transition: all 0.3s ease-in-out;
  }
`;
export const ContainerText = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;
