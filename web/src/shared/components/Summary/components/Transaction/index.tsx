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
  amount: number
  type: 'income' | 'outcome' | 'total'
}

const icon = {
  income: incomeImg,
  outcome: outcomeImg,
  total: totalImg,
} as const

export function Transaction({ name, amount, type }: TransactionType) {
  return (
    <TransactionContainer>
      <TransactionHeader>
        <TransactionDetails>{name}</TransactionDetails>
        <TransactionImage src={icon[type]} alt="Entradas" />
      </TransactionHeader>
      <TransactionAmount>
        {new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(amount)}
      </TransactionAmount>
    </TransactionContainer>
  )
}
