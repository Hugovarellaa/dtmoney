import {
  TransactionContainer,
  TransactionHeader,
  TransactionImage,
  TransactionParagraph,
  TransactionStrong,
} from './styles'

import incomeImg from '../../../../assets/income.svg'
import outcomeImg from '../../../../assets/outcome.svg'
import totalImg from '../../../../assets/total.svg'

interface TransactionProps {
  title: string
  icon: 'income' | 'outcome' | 'total'
  amount: string
  total?: boolean
}

const image = {
  income: incomeImg,
  outcome: outcomeImg,
  total: totalImg,
}

export function Transaction({
  title,
  icon,
  amount,
  total = false,
}: TransactionProps) {
  return (
    <TransactionContainer total={total}>
      <TransactionHeader>
        <TransactionParagraph total={total}>{title}</TransactionParagraph>
        <TransactionImage src={image[icon]} />
      </TransactionHeader>
      <TransactionStrong total={total}>{amount}</TransactionStrong>
    </TransactionContainer>
  )
}
