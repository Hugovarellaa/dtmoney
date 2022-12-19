import { Transaction } from './components/Transaction'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <Transaction title="Entradas" icon="income" amount="R$ 5.000,00" />
      <Transaction title="Saídas" icon="outcome" amount="R$ 3.000,00" />
      <Transaction
        title="Total"
        icon="total"
        amount="R$ 2.000,00"
        totalActive
      />
    </SummaryContainer>
  )
}
