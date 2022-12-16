import { ThemeProvider } from 'styled-components'
import { Home } from './Pages/Home'
import { defaultTheme, GlobalStyle } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
