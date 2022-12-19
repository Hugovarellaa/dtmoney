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
  totalActive?: boolean
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
  totalActive = false,
}: TransactionProps) {
  return (
    <TransactionContainer totalActive={totalActive}>
      <TransactionHeader>
        <TransactionParagraph totalActive={totalActive}>
          {title}
        </TransactionParagraph>
        <TransactionImage src={image[icon]} />
      </TransactionHeader>

      <TransactionStrong totalActive={totalActive}>{amount}</TransactionStrong>
    </TransactionContainer>
  )
}
