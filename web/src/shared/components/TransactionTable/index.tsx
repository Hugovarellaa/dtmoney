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
  return (
    <TransactionTableContainer>
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
          <TransactionTableTr>
            <TransactionTableTd>Freelancer de website</TransactionTableTd>
            <TransactionTableTd type="deposit">R$ 6.000,00</TransactionTableTd>
            <TransactionTableTd>Dev</TransactionTableTd>
            <TransactionTableTd>05/12/2022</TransactionTableTd>
          </TransactionTableTr>

          <TransactionTableTr>
            <TransactionTableTd>Aluguel</TransactionTableTd>
            <TransactionTableTd type="withdraw">
              -R$ 2.000,00
            </TransactionTableTd>
            <TransactionTableTd>Casa</TransactionTableTd>
            <TransactionTableTd>10/12/2022</TransactionTableTd>
          </TransactionTableTr>
        </TransactionTableTbody>
      </TransactionTableTable>
    </TransactionTableContainer>
  )
}
