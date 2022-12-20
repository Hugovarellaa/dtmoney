import { Transaction } from './components/Transaction'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <Transaction name="Entradas" amount={17400} type="income" />
      <Transaction name="Saídas" amount={1259} type="outcome" />
      <Transaction name="Total" amount={16141} type="total" lastTransaction />
    </SummaryContainer>
  )
}
