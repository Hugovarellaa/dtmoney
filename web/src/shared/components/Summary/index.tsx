import { useModal } from '../../context/useModal'
import { Transaction } from './components/Transaction'
import { SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useModal()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.totals += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.totals -= transaction.amount
      }
      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      totals: 0,
    },
  )

  return (
    <SummaryContainer>
      <Transaction
        title="Entradas"
        icon="income"
        amount={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.deposits)}
      />
      <Transaction
        title="Saídas"
        icon="outcome"
        amount={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.withdraws)}
      />
      <Transaction
        title="Total"
        icon="total"
        amount={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.totals)}
        totalActive
      />
    </SummaryContainer>
  )
}
