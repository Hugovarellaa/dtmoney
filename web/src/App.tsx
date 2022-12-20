import Modal from 'react-modal'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { ModalProvider } from './shared/context/useModal'
import { makeServer } from './shared/services/mirage'
import { GlobalStyles } from './shared/styles/global/GlobalStyles'
import defaultTheme from './shared/styles/theme/defaultTheme'

Modal.setAppElement('#root')

if (process.env.NODE_ENV !== 'production') {
  makeServer()
}

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <Home />
      </ModalProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
