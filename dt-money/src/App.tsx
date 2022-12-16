import Modal from 'react-modal'
import { ThemeProvider } from 'styled-components'
import { TransactionModalProvider } from './context/useModal'
import { Home } from './Pages/Home'
import { makeServer } from './services/mirage'
import { defaultTheme, GlobalStyle } from './styles'

if (process.env.NODE_ENV !== 'production') {
  makeServer()
}

Modal.setAppElement('#root')

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionModalProvider>
        <Home />
        <GlobalStyle />
      </TransactionModalProvider>
    </ThemeProvider>
  )
}
