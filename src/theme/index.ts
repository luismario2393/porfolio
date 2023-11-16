// create interface for theme

interface ThemeInterface {
  colors: {
    blue: string;
    lightBlue: string;
    white: string;
    black: string;
    gray: string;
    lightGray: string;
    veryLightGray: string;
  };

  font: {
    fzXs: string;
    fzSm: string;
    fzMd: string;
    fzLg: string;
    fzXl: string;
    fzXxl: string;
    fzHeading: string;
    fzHeadingMax: string;
    fzBigHeading: string;
  };
  weight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
}

const theme: ThemeInterface = {
  colors: {
    blue: "#0079FF",
    lightBlue: "#f0f8ff",
    white: "#ffffff",
    black: "#000000",
    gray: "#333333",
    lightGray: "#828282",
    veryLightGray: "#E0E0E0",
  },

  font: {
    fzXs: "12px",
    fzSm: "14px",
    fzMd: "16px",
    fzLg: "18px",
    fzXl: "20px",
    fzXxl: "22px",
    fzHeading: "32px",
    fzHeadingMax: "48px",
    fzBigHeading: "72px",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export default theme;
