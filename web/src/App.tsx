import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./shared/styles/global/GlobalStyles";
import defaultTheme from "./shared/styles/theme/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}
