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
          <Tr>
            <Td>Desenvolvimento de website</Td>
            <Td type="deposit">R$ 12.000,00</Td>
            <Td>Dev</Td>
            <Td>05/12/2022</Td>
          </Tr>

          <Tr>
            <Td>Aluguel</Td>
            <Td type="withdraw">- R$ 2.000,00</Td>
            <Td>Casa</Td>
            <Td>10/12/2022</Td>
          </Tr>
        </Tbody>
      </Table>
    </TransactionTableContainer>
  )
}
