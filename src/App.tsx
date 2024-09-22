import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
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
    background-color: light-dark(var(--c-light), var(--c-dark));
    display: grid;
    font-size: 2rem;
    line-height: 1.5;
    font-family: ${(props) => props.theme.font.family};
    margin: 0;
    min-height: 100vh;
  }
`;

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
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
