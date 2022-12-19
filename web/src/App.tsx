import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { makeServer } from './shared/services/mirage'
import { defaultTheme } from './shared/styles/theme/default'

if (process.env.NODE_ENV !== 'production') {
  makeServer()
}
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  )
}
