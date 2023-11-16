import styled from "styled-components";

interface Props {
  center?: boolean;
}

export const Container = styled.div<Props>`
  margin: 0 auto;
  width: 90%;
  transition: all 0.3s ease-in-out;
  height: 100vh;

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
