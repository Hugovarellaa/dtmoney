import { useModal } from '../../context/useModal'
import {
  TransactionNull,
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
      {transactions.length === 0 ? (
        <TransactionNull>Cadastre uma transação</TransactionNull>
      ) : (
        <TransactionTableTable>
          <TransactionTableThead>
            <TransactionTableTr>
              <TransactionTableTh>Titulo</TransactionTableTh>
              <TransactionTableTh>Valor</TransactionTableTh>
              <TransactionTableTh>Categoria</TransactionTableTh>
              <TransactionTableTh>Data</TransactionTableTh>
            </TransactionTableTr>
          </TransactionTableThead>
          <TransactionTableTbody>
            {transactions.map((transaction) => (
              <TransactionTableTr key={transaction.id}>
                <TransactionTableTd>{transaction.title}</TransactionTableTd>
                <TransactionTableTd type={transaction.type}>
                  {transaction.type === 'withdraw' && ' -'}
                  {transaction.amount}
                </TransactionTableTd>
                <TransactionTableTd>{transaction.category}</TransactionTableTd>
                <TransactionTableTd>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    // eslint-disable-next-line prettier/prettier
                    new Date(transaction.created_at)
                  )}
                </TransactionTableTd>
              </TransactionTableTr>
            ))}
          </TransactionTableTbody>
        </TransactionTableTable>
      )}
    </TransactionTableContainer>
  )
}
