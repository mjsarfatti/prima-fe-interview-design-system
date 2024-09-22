import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/App";
import { theme } from "../src/theme";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme,
      // light: lightTheme,
      // dark: darkTheme,
    },
    // defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
