import styled from "styled-components";

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  grid-gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: ${({ theme }) => theme.colors.lightGray};

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.blue};
    }

    line-height: 12px;
  }
`;

export const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }

    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.blue};

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      height: 100%;
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: #0a192f;
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid ${({ theme }) => theme.colors.blue};
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

export const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
  }
`;
