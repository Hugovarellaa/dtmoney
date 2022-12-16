import { SummaryContainer } from './styles'

import { Transactions } from './components/Transactions/transactions'

export function Summary() {
  return (
    <SummaryContainer>
      <Transactions title="Entradas" type="deposit" value="R$ 12.000,00" />
      <Transactions title="Saídas" type="withdraw" value="R$ 12.000,00" />
      <Transactions
        title="Total"
        type="total"
        value="R$ 12.000,00"
        lastTransactions
      />
    </SummaryContainer>
  )
}
