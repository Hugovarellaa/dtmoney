import { Dashboard } from '../../shared/components/Dashboard'
import { Header } from '../../shared/components/Header'
import { GlobalStyles } from '../../shared/styles/global/GlobalStyles'

export function Home() {
  return (
    <div>
      <Header />
      <Dashboard />

      <GlobalStyles />
    </div>
  )
}
