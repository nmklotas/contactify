import "@testing-library/jest-dom/extend-expect";
import rtlEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { createTheme } from "../common/theme";
import { ThemeProvider } from "@material-ui/styles";

export * from "@testing-library/react";

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) =>
  rtlRender(ui, {
    wrapper: ({ children }) => {
      const theme = createTheme();
      return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    },
    ...options,
  });

export const userEvent = rtlEvent;
