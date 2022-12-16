import {
  TransactionsContainer,
  TransactionsHeader,
  TransactionsImage,
  TransactionsTitle,
  TransactionsValue,
} from './styles'

import incomeImg from '../../../../assets/income.svg'
import outcomeImg from '../../../../assets/outcome.svg'
import totalImg from '../../../../assets/total.svg'

interface TransactionsProps {
  title: string
  type: 'deposit' | 'withdraw' | 'total'
  value: string
  lastTransactions?: boolean
}

const icons = {
  deposit: incomeImg,
  withdraw: outcomeImg,
  total: totalImg,
}

export function Transactions({
  title,
  type,
  value,
  lastTransactions,
}: TransactionsProps) {
  return (
    <TransactionsContainer lastTransactions={lastTransactions}>
      <TransactionsHeader>
        <TransactionsTitle>{title}</TransactionsTitle>
        <TransactionsImage src={icons[type]} alt="" />
      </TransactionsHeader>
      <TransactionsValue lastTransactions={lastTransactions} type={type}>
        {type === 'withdraw' && ' -'}
        {value}
      </TransactionsValue>
    </TransactionsContainer>
  )
}
