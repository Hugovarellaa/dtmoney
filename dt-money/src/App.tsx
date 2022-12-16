import { ThemeProvider } from 'styled-components'
import { Home } from './Pages/Home'
import { makeServer } from './services/mirage'
import { defaultTheme, GlobalStyle } from './styles'

if (process.env.NODE_ENV !== 'production') {
  makeServer()
}

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
