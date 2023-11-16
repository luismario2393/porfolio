import styled from "styled-components";
import { TextProps } from "../common";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
