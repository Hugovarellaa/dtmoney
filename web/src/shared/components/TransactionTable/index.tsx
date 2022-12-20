import { useTransaction } from '../../context/useTransaction'
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TransactionTableContainer,
} from './styles'

export function TransactionTable() {
  const { transactions } = useTransaction()
  return (
    <TransactionTableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th>Valor</Th>
            <Th>Categoria</Th>
            <Th>Data</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.name}</Td>
              <Td type={transaction.type}>
                {transaction.type === 'withdraw' && ' -'}

                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </Td>
              <Td>{transaction.category}</Td>
              <Td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.created_at),
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TransactionTableContainer>
  )
}
