import styled from "styled-components";

interface NavProps {
  open: boolean;
  scrolled: boolean;
}

export const Nav = styled.nav<NavProps>`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform: ${({ scrolled }) =>
    scrolled ? "translateY(-60px)" : "translateY(0)"};

  .nav_logo {
    font-weight: bold;
    font-size: 20px;
    margin: 15px;
    color: ${({ theme }) => theme.colors.blue};
  }
  .nav_items {
    a {
      margin: 15px;
      color: ${({ theme }) => theme.colors.blue};
      position: relative;
      text-decoration: none;

      .item {
        display: inline-block;
        position: relative;
        transition: opacity 0.3s ease;

        &:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: ${({ theme }) => theme.colors.blue};
          transform-origin: bottom right;
          transition: transform 0.4s ease-out;
        }
        &:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }

      .buttonNav {
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
        border-radius: 4px;
        margin-top: 60px;
        padding: 18px 38px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border: 1px solid ${({ theme }) => theme.colors.blue};
        font-family: "Lexend", sans-serif;
        font-size: ${({ theme }) => theme.font.fzLg};

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.blue};
          transition: all 0.3s ease-in-out;
        }
      }

      @media (min-width: 768px) {
        .buttonNav {
          margin-top: 0;
          padding: 8px 8px;
          font-size: ${({ theme }) => theme.font.fzSm};
        }
      }
    }
  }

  .nav_toggle {
    display: none;
  }

  @media (max-width: 768px) {
    background: ${({ theme }) => theme.colors.lightBlue};

    .nav_items {
      position: absolute;
      top: 60px;
      left: 0;
      background: ${({ theme }) => theme.colors.lightBlue};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 100vh;
      transform: ${({ open }) =>
        open ? "transform: translateX(0)" : "translateX(-100%)"};
      transition: 0.3s ease all;
    }

    .nav_toggle {
      display: flex !important;
      flex-direction: column;
      margin: 15px;
      > span {
        width: 30px;
        height: 4px;
        background: ${({ theme }) => theme.colors.blue};
        margin-bottom: 5px;
        border-radius: 2px;
        transform-origin: 5px 0px;
        transition: all 0.2s linear;
        ${({ open }) =>
          open &&
          `
          transform: rotate(45deg) translate(0px, 0px);
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(3) {
            transform: rotate(-45deg) translate(-5px, 1px);
          }
          `};
      }
    }
  }
`;
