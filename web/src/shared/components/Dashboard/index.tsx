import { Summary } from '../Summary'
import { TransactionModal } from '../TransactionModal'
import { TransactionTable } from '../TransactionTable'
import { DashboardContainer } from './styles'

export function Dashboard() {
  return (
    <DashboardContainer>
      <Summary />
      <TransactionTable />
      <TransactionModal />
    </DashboardContainer>
  )
}
