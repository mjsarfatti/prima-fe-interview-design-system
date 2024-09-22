import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* color-scheme: light dark; */
    --c-light: ${(props) => props.theme.color.light};
    --c-dark: ${(props) => props.theme.color.dark};
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  body {
    /* background-color: light-dark(var(--c-light), var(--c-dark)); */
    background-color: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.font.size.regular};
    line-height: ${(props) => props.theme.font.height};
    font-family: ${(props) => props.theme.font.family};
    color: ${(props) => props.theme.color.dark};
    margin: 0;
    min-height: 100vh;
  }
`;

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export const App = () => (
  <ThemeWrapper>
    <div>👋🏻</div>
  </ThemeWrapper>
);
