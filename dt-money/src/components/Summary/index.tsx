import { SummaryContainer } from './styles'

import { useModal } from '../../context/useModal'
import { Transactions } from './components/Transactions/transactions'

export function Summary() {
  const { transactions } = useModal()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }
      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <Transactions
        title="Entradas"
        type="deposit"
        value={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.deposits)}
      />
      <Transactions
        title="Saídas"
        type="withdraw"
        value={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.withdraws)}
      />
      <Transactions
        title="Total"
        type="total"
        value={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.total)}
        lastTransactions
      />
    </SummaryContainer>
  )
}
