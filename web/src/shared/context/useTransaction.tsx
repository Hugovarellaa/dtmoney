import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  amount: number
  category: string
  name: string
  created_at: Date
}

interface TransactionContextData {
  transactions: Transaction[]
}

interface TransactionProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get('/transactions')
      setTransactions(response.data.transactions)
    }
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
