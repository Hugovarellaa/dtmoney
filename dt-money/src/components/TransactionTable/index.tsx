import { useModal } from '../../context/useModal'
import {
  TransactionTableContainer,
  TransactionTableTable,
  TransactionTableTbody,
  TransactionTableTd,
  TransactionTableTh,
  TransactionTableThead,
  TransactionTableTr,
} from './styles'

export function TransactionTable() {
  const { transactions } = useModal()

  return (
    <TransactionTableContainer>
      <TransactionTableTable>
        <TransactionTableThead>
          <TransactionTableTr>
            <TransactionTableTh>Titulo</TransactionTableTh>
            <TransactionTableTh>Valor</TransactionTableTh>
            <TransactionTableTh>Categoria</TransactionTableTh>
            <TransactionTableTh>Data</TransactionTableTh>
            <TransactionTableTh>Ações</TransactionTableTh>
          </TransactionTableTr>
        </TransactionTableThead>
        <TransactionTableTbody>
          {transactions.map((transaction) => (
            <TransactionTableTr key={transaction.id}>
              <TransactionTableTd>{transaction.title}</TransactionTableTd>
              <TransactionTableTd type={transaction.type}>
                {transaction.type === 'withdraw' && ' -'}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </TransactionTableTd>
              <TransactionTableTd>{transaction.category}</TransactionTableTd>
              <TransactionTableTd>
                {new Intl.DateTimeFormat('pt-BR').format(
                  // eslint-disable-next-line prettier/prettier
                  new Date(transaction.created_at)
                )}
              </TransactionTableTd>
              <TransactionTableTd>Att Del</TransactionTableTd>
            </TransactionTableTr>
          ))}
        </TransactionTableTbody>
      </TransactionTableTable>
    </TransactionTableContainer>
  )
}
