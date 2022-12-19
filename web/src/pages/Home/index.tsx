import { Dashboard } from '../../shared/components/Dashboard'
import { Header } from '../../shared/components/Header'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Dashboard />
    </HomeContainer>
  )
}
