import styled from "styled-components";

interface StyledProps {
  activeTabId?: number;
  isActive?: boolean;
}

export const ContainerSection = styled.section`
  max-width: 800px;
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }
  @media (min-width: 700px) {
    min-height: 340px;
  }
`;

export const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

export const StyledTabButton = styled.button<StyledProps>`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.blue};
    outline: 0;
  }
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid #112240;
  background-color: transparent;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.blue : "#8892b0")};
  font-family: "Lexend ", sans-serif;
  font-size: ${({ theme }) => theme.font.fzXs};
  text-align: left;
  white-space: nowrap;
  border: none;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid #112240;
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const StyledHighlight = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.blue};
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 120px;
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

export const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${({ theme }) => theme.font.fzSm};
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: "Lexend", sans-serif;
      font-size: ${({ theme }) => theme.font.fzSm};
      color: ${({ theme }) => theme.colors.lightGray};

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.blue};
      }

      line-height: 12px;
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.fzXxl};
    font-weight: 500;
    line-height: 1.3;
    margin-top: 0;

    .company {
      color: ${({ theme }) => theme.colors.blue};
      .item {
        display: inline-block;
        position: relative;
        transition: opacity 0.3s ease;
        color: ${({ theme }) => theme.colors.blue};
        text-decoration: none;

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
    }
  }

  .range {
    margin-bottom: 25px;
    color: #8892b0;
    font-family: "Lexend ", sans-serif;
    font-size: ${({ theme }) => theme.font.fzXs};
  }
`;
