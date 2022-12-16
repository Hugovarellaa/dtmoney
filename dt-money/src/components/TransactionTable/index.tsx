import {
  TransactionTableContainer,
  TransactionTableTable,
  TransactionTableTbody,
  TransactionTableTd,
  TransactionTableTh,
  TransactionTableThead,
  TransactionTableTr,
} from './styles'

interface TransactionTableProps {
  type?: 'withdraw' | 'deposit'
}

export function TransactionTable({ type }: TransactionTableProps) {
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
          <TransactionTableTr>
            <TransactionTableTd>Desenvolvimento de website</TransactionTableTd>
            <TransactionTableTd type="deposit">R$ 12.000,00</TransactionTableTd>
            <TransactionTableTd>Dev</TransactionTableTd>
            <TransactionTableTd>05/12/2022</TransactionTableTd>
            <TransactionTableTd>Att Del</TransactionTableTd>
          </TransactionTableTr>

          <TransactionTableTr>
            <TransactionTableTd>Aluguel</TransactionTableTd>
            <TransactionTableTd type="withdraw">
              - R$ 2.000,00
            </TransactionTableTd>
            <TransactionTableTd>Casa</TransactionTableTd>
            <TransactionTableTd>10/12/2022</TransactionTableTd>
            <TransactionTableTd>Att Del</TransactionTableTd>
          </TransactionTableTr>
        </TransactionTableTbody>
      </TransactionTableTable>
    </TransactionTableContainer>
  )
}
