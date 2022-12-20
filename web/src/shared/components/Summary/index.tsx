import { useTransaction } from '../../context/useTransaction'
import { Transaction } from './components/Transaction'
import { SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useTransaction()

  const summary = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === 'deposit') {
        acc.deposits += transactions.amount
        acc.totals += transactions.amount
      } else {
        acc.withdraws += transactions.amount
        acc.totals -= transactions.amount
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
        type="income"
        name="Entradas"
        amount={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.deposits)}
      />
      <Transaction
        name="Saídas"
        amount={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.withdraws)}
        type="outcome"
      />
      <Transaction
        name="Total"
        amount={new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.totals)}
        type="total"
        lastTransaction
      />
    </SummaryContainer>
  )
}
