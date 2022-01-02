import { DefaultTheme } from "@material-ui/styles";

export function createTheme(): DefaultTheme {
  return {
    palette: {
      text: {
        primary: {
          main: "#4F4E45",
          dark: "black",
          light: "#fff",
          active: "#6EB4BB",
        },
        link: {
          main: "#81B0D1",
        },
      },
      primary: {
        main: "#3866B6",
        light: "#5CB3BB",
        dark: "#D7DFE3",
        contrast: "#fff",
      },
    },
  };
}
