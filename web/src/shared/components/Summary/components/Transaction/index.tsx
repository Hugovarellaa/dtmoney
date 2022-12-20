import {
  TransactionAmount,
  TransactionContainer,
  TransactionDetails,
  TransactionHeader,
  TransactionImage,
} from './styles'

import incomeImg from '../../../../assets/income.svg'
import outcomeImg from '../../../../assets/outcome.svg'
import totalImg from '../../../../assets/total.svg'

interface TransactionType {
  name: string
  amount: string
  type: 'income' | 'outcome' | 'total'
  lastTransaction?: boolean
}

const icon = {
  income: incomeImg,
  outcome: outcomeImg,
  total: totalImg,
} as const

export function Transaction({
  name,
  amount,
  type,
  lastTransaction = false,
}: TransactionType) {
  return (
    <TransactionContainer lastTransaction={lastTransaction}>
      <TransactionHeader>
        <TransactionDetails lastTransaction={lastTransaction}>
          {name}
        </TransactionDetails>
        <TransactionImage src={icon[type]} alt="Entradas" />
      </TransactionHeader>
      <TransactionAmount lastTransaction={lastTransaction}>
        {amount}
      </TransactionAmount>
    </TransactionContainer>
  )
}
