import { Summary } from '../Summary'
import { TransactionTable } from '../TransactionTable'
import { DashboardContainer } from './styles'

export function Dashboard() {
  return (
    <DashboardContainer>
      <Summary />
      <TransactionTable />
    </DashboardContainer>
  )
}
