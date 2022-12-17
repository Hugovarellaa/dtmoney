import { useEffect, useState } from 'react'
import { api } from '../../services/axios'
import {
  TransactionTableContainer,
  TransactionTableTable,
  TransactionTableTbody,
  TransactionTableTd,
  TransactionTableTh,
  TransactionTableThead,
  TransactionTableTr,
} from './styles'

interface Transaction {
  id: number
  title: string
  amount: number
  type: 'withdraw' | 'deposit'
  category: string
  created_at: Date
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [transactions])

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
