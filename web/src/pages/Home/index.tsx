import { Dashboard } from '../../shared/components/Dashboard'
import { Header } from '../../shared/components/Header'
import { TransactionModal } from '../../shared/components/TransactionModal'
import { GlobalStyles } from '../../shared/styles/global/GlobalStyles'

export function Home() {
  return (
    <div>
      <Header />
      <Dashboard />

      <TransactionModal />
      <GlobalStyles />
    </div>
  )
}
