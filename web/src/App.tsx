import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import defaultTheme from "./shared/styles/theme/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}
